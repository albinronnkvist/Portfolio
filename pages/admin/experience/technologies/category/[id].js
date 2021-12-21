import Breadcrumbs from "../../../../../components/sections/breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { AuthProvider } from "../../../../../firebase/auth/auth";
import { db } from "../../../../../firebase/initFirebase";
import { doc, getDoc, collection, getDocs } from '@firebase/firestore'
import AdminDeleteTechnologyCategory from '../../../../../firebase/experience/technologies/categories/adminDeleteTechnologyCategory'
import AdminEditTechnologyCategory from '../../../../../firebase/experience/technologies/categories/adminEditTechnologyCategory'

export default function AdminEditCategory({ category }) {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const crumbs = [
    {
      title: 'Admin',
      route: '/admin'
    },
    {
      title: "navigation:menu.experience",
      route: '/admin#experience'
    },
    {
      title: "navigation:subSections.technologies",
      route: '/admin/experience/technologies'
    },
    {
      title: locale === "sv" ? category.title : category.titleEn,
      route: `/admin/experience/technologies/category/${category.id}`
    }
  ]

  return (
    <AuthProvider>
      <Breadcrumbs crumbs={crumbs} />
      <h1>{category.title}</h1>
      
      <section className="mb-8">
        <h2>Radera</h2>
        <AdminDeleteTechnologyCategory />
      </section>
      
      <section>
        <h2>Redigera</h2>
        <AdminEditTechnologyCategory category={category} />
      </section>
    </AuthProvider>
  )
}

export const getStaticPaths = async () => {
  const data = await getDocs(collection(db, "technologiesCategories"))
  const categories = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const pathsEn = categories.map(category => {
    return {
      params: { id: category.id.toString() }, locale: 'en-US'
    }
  })

  const pathsSv = categories.map(category => {
    return {
      params: { id: category.id.toString() }, locale: 'sv'
    }
  })

  return {
    paths: [...pathsEn, ...pathsSv],
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await getDoc(doc(db, "technologiesCategories", id))
  const category = data.data()

  return {
    props: {category}
  }
}