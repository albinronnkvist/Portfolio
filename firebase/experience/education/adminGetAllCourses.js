import Link from 'next/link'
import Loading from '../../../components/other/loading'

export default function AdminGetAllCourses({courses}) {
  return (
    <>
      <div className="rounded w-full lg:w-2/3 p-4 dark:bg-gray-light bg-white shadow-xl">
        <div className="dark:text-white text-black-dark flex flex-col gap-4">
          {courses ? (
            courses.map((course, index) => (
              <div 
                key={index}
                className="flex flex-row gap-4"
              >
                <Link href="/admin/experience/education/[id]" as={`/admin/experience/education/${course.id}`}>
                  <a>
                    <i class="bi bi-pencil-square cursor-pointer text-primary-default hover:opacity-75 transition-opacity duration-300"></i>
                  </a>
                </Link>
                {course.title}
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