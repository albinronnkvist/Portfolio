import Breadcrumbs from "../../../../components/sections/breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import { AuthProvider } from "../../../../firebase/auth/auth";
import { db } from "../../../../firebase/initFirebase";
import { doc, getDoc, collection, getDocs, query, orderBy } from '@firebase/firestore'
import AdminDeleteTechnology from "../../../../firebase/experience/technologies/AdminDeleteTechnology";
import AdminEditTechnology from "../../../../firebase/experience/technologies/adminEditTechnology";

export default function AdminSingleTechnology({ technology, categories }) {
  const { t } = useTranslation()

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
      title: technology.title,
      route: `/admin/experience/technologies/${technology.id}`
    }
  ]

  return (
    <AuthProvider>
      <Breadcrumbs crumbs={crumbs} />
      <h1>{technology.title}</h1>
      
      <section className="mb-8">
        <h2>Radera</h2>
        <AdminDeleteTechnology />
      </section>
      
      <section>
        <h2>Redigera</h2>
        <AdminEditTechnology technology={technology} categories={categories} />
      </section>
    </AuthProvider>
  )
}

export const getStaticPaths = async () => {
  const data = await getDocs(collection(db, "technologies"))
  const technologies = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const pathsEn = technologies.map(technology => {
    return {
      params: { id: technology.id.toString() }, locale: 'en-US'
    }
  })

  const pathsSv = technologies.map(technology => {
    return {
      params: { id: technology.id.toString() }, locale: 'sv'
    }
  })

  return {
    paths: [...pathsEn, ...pathsSv],
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await getDoc(doc(db, "technologies", id))
  const technology = data.data()

  const q = query(collection(db, "technologiesCategories"), orderBy("title", "desc"))
  const data2 = await getDocs(q)
  const categories = data2.docs.map((doc) => ({...doc.data(), id: doc.id}))

  return {
    props: {technology, categories}
  }
}