import Link from "next/link"
import StarterTitle from '../../components/animations/starterTitle'
import useTranslation from 'next-translate/useTranslation'
import Breadcrumbs from '../../components/sections/breadcrumbs'
import { AuthProvider } from "../../firebase/auth/auth"

const Admin = () => {
  let { t } = useTranslation()
  const crumbs = [
    {
      title: "Admin",
      route: '/admin'
    }
  ]

  return (
    <AuthProvider>
      <section className="w-full">
        <Breadcrumbs crumbs={crumbs} />
        <StarterTitle>
          Admin
        </StarterTitle>
      </section>
      <section id="experience">
        <h2>{t("navigation:menu.experience")}</h2>
        <ul>
          <li>
            <Link href="/admin/experience/education">
              {t("experience:education.title")}
            </Link>
          </li>
          <li>
            <Link href="/admin/experience/technologies">
              {t("experience:technologies.title")}
            </Link>
          </li>
        </ul>

        <h2>{t("navigation:menu.projects")}</h2>
        <Link href="/admin/projects">
          {t("navigation:menu.projects")}
        </Link>
      </section>
    </AuthProvider>
  )
}

export default Admin