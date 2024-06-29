export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="dark:bg-black-dark bg-primary-dark w-full pt-12 pb-6 mt-12 md:mt-6">
      <div className="text-center">
        <p className="text-white">
          &copy; {year} Albin Rönnkvist
        </p>
        <div className="flex flex-row gap-8 text-xl justify-center items-center mt-4">
          <a href="mailto:contact@albinronnkvist.me" target="_blank" rel="noreferrer" className="text-white" aria-label="Email"><i className="bi bi-envelope"></i></a>
          <a href="https://github.com/albinronnkvist" target="_blank" rel="noreferrer" className="text-white" aria-label="Github"><i className="bi bi-github"></i></a>
          <a href="https://stackoverflow.com/users/15634040/albinr" target="_blank" rel="noreferrer" className="text-white" aria-label="Stack Overflow"><i className="bi bi-stack-overflow"></i></a>
          <a href="https://medium.com/@albinronnkvist" target="_blank" rel="noreferrer" className="text-white" aria-label="Medium"><i className="bi bi-medium"></i></a>
          <a href="https://www.linkedin.com/in/albin-r%C3%B6nnkvist-4b0aa0181/" target="_blank" rel="noreferrer" className="text-white" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  )
}