import Header from './sections/header'
import Footer from './sections/footer';
import { useState } from 'react'

export default function Layout({ children, home }) {
  const [blurred, setBlurred] = useState(false)

  return (
    <div className="bg-white dark:bg-black-dark overflow-hidden relative">
      <header>
        <Header toggleBlur={blurred => setBlurred(blurred)} />
      </header>
      <main>
        <div className={`${blurred ? 'filter blur-sm' : 'filter blur-none'} md:blur-none container py-2 md:py-4 px-4 mx-auto min-h-screen`}>
          {children}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

