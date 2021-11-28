import Link from 'next/link'
import Loading from '../../components/other/loading'

export default function AdminGetAllProjects({projects}) {
  return (
    <>
      <div className="rounded w-full lg:w-2/3 p-4 dark:bg-gray-light bg-white shadow-xl">
        <div className="dark:text-white text-black-dark flex flex-col gap-4">
          {projects ? (
            projects.map((project, index) => (
              <div 
                key={index}
                className="flex flex-row gap-4"
              >
                <Link href="/admin/projects/[id]" as={`/admin/projects/${project.id}`}>
                  <a>
                    Edit
                  </a>
                </Link>
                {project.title}
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  )
}