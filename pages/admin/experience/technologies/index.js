import Breadcrumbs from '../../../../components/sections/breadcrumbs'
import useTranslation from 'next-translate/useTranslation'
import { AuthProvider } from '../../../../firebase/auth/auth'
import { db } from '../../../../firebase/initFirebase'
import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import AdminGetAllTechnologyCategories from '../../../../firebase/experience/technologies/categories/adminGetAllTechnologyCategories'
import AdminCreateTechnologyCategory from '../../../../firebase/experience/technologies/categories/adminCreateTechnologyCategory'
import AdminGetAllTechnologies from '../../../../firebase/experience/technologies/adminGetAllTechnologies'
import AdminCreateTechnology from '../../../../firebase/experience/technologies/adminCreateTechnology'

export default function AdminTechnologies({ categories, technologies }) {
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
    }
  ]

  return (
    <AuthProvider>
      <Breadcrumbs crumbs={crumbs} />
      <h1>{t("navigation:subSections.technologies")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full dark:bg-gray-light bg-white shadow-xl rounded-md h-full p-5">
          <section>
            <h2>Skapa kategori</h2>
            <AdminCreateTechnologyCategory />
          </section>

          <section className="mt-4">
            <h2>Alla kategorier</h2>
            <AdminGetAllTechnologyCategories categories={categories} />
          </section>
        </div>

        <div className="w-full dark:bg-gray-light bg-white shadow-xl rounded-md h-full p-5">
          <section>
            <h2>Skapa teknologi</h2>
            <AdminCreateTechnology categories={categories} />
          </section>
          
          <section className="mt-4">
            <h2>Alla teknologier</h2>
            <AdminGetAllTechnologies technologies={technologies} categories={categories} />
          </section>
        </div>
      </div>
    </AuthProvider>
  )
}

export const getStaticProps = async () => {
  const q = query(collection(db, "technologiesCategories"), orderBy("title", "desc"))
  const data = await getDocs(q)
  const categories = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const q2 = query(collection(db, "technologies"), orderBy("title", "desc"))
  const data2 = await getDocs(q2)
  const technologies = data2.docs.map((doc) => ({...doc.data(), id: doc.id}))

  return {
    props: {categories, technologies}
  }
}