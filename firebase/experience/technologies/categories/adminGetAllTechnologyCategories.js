import Link from 'next/link'
import Loading from '../../../../components/other/loading'

export default function AdminGetAllTechnologyCategories({categories}) {
  return (
    <>
      <div className="rounded w-full p-4 dark:bg-gray-light2 bg-white shadow-xl">
        <div className="dark:text-white text-black-dark flex flex-col gap-4">
          {categories ? (
            categories.map((category, index) => (
              <div 
                key={index}
                className="flex flex-row gap-4"
              >
                <Link href="/admin/experience/technologies/category/[id]" as={`/admin/experience/technologies/category/${category.id}`}>
                  <a>
                    <i class="bi bi-pencil-square cursor-pointer text-primary-default hover:opacity-75 transition-opacity duration-300"></i>
                  </a>
                </Link>
                {category.title}
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