import ChangeLanguage from '../other/changeLanguage'
import ChangeTheme from '../other/changeTheme'
import { useState } from 'react';
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Headroom from 'react-headroom'
import { motion } from "framer-motion"
import Logo from '../other/logo';
import Hamburger from 'hamburger-react'

export default function Header(props) {
  let { t } = useTranslation()
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleBlur = () => {
    props.toggleBlur(!showMenu)
  }

  const links = [
    {
      title: t('navigation:menu.about'),
      route: '/about'
    },
    {
      title: t('navigation:menu.experience'),
      route: '/experience'
    },
    {
      title: t('navigation:menu.projects'),
      route: '/projects'
    }
  ]

  return (
    <>
      <Headroom>
        <nav className="bg-primary-dark dark:bg-black-dark py-2 md:py-4 shadow-md">
          <div className="container px-4 mx-auto md:flex md:items-center">

            <div className="flex justify-between items-center">
              <Link href="/">
                <motion.button whileHover={{ scale: 1.1  }} whileTap={{ scale: 0.9 }} aria-label="Start">
                  <Logo />
                </motion.button>
              </Link>
              <button
                onClick={() => {toggleMenu(); toggleBlur(); }}
                className={`${showMenu ? 'hidden' : ''}px-1 py-1 rounded text-white dark:text-primary-default hover:opacity-75 md:hidden`} 
                aria-label="Open menu"
              >
                <Hamburger toggled={showMenu} />
              </button>
            </div>
            <div 
              className={`${showMenu ? '' : 'hidden'}
              z-50 animate-menuSlide md:animate-none shadow-xl md:shadow-none fixed top-0 right-0 md:static w-9/12 md:w-auto h-screen md:h-auto bg-primary-dark2 md:bg-primary-dark dark:bg-black-light md:dark:bg-black-dark md:flex flex-col md:flex-row sm:flex-col md:ml-auto md:mt-0`}
            >
              <div className="flex flex-row-reverse items-center">
                <button
                  onClick={() => { toggleMenu(); toggleBlur(); }}
                  className={`${showMenu ? '' : 'hidden'} animate-closeSlide px-1 py-1 rounded text-white dark:text-primary-default hover:opacity-75 md:hidden mr-4 mt-2`}
                  aria-label="Close menu"
                >
                  <Hamburger toggled={showMenu} />
                </button>
              </div>
                
              <div className="flex flex-col sm:flex-col md:flex-row pl-4 md:pl-auto pr-4 md:pr-auto">
                {
                  links.map((link, index) => {
                    return (
                      <Link href={link.route} key={index} className="sm:mb-4">
                        <motion.button 
                          whileTap={{ scale: 0.9 }}
                          whileHover={{
                            textShadow: "0px 0px 12px rgb(52, 211, 153)"
                          }}
                          whileFocus={{ scale: 1.1, textShadow: "0px 0px 12px rgb(52, 211, 153)" }} 
                          onClick={() => {toggleMenu(); toggleBlur(); }}
                          className="text-left text-2xl md:text-base lg:text-base xl:text-lg ml-6 mt-6 mb-4 md:mb-0 md:mt-0 md:ml-4 md:mx-2 dark:text-primary-default text-white"
                        >
                          {link.title}
                        </motion.button>
                      </Link>
                    )
                  })
                }
              </div>
              <div className="md:mr-4 flex flex-row md:justify-center md:items-center mt-6 md:mt-0">
                <motion.a 
                  whileTap={{ scale: 0.9 }} 
                  className="border rounded text-left text-2xl md:text-base lg:text-base xl:text-lg font-mono px-4 py-2 ml-10 md:ml-0 md:mx-2 dark:text-primary-default text-white dark:hover:bg-primary-default dark:hover:border-primary-default dark:hover:text-black-dark hover:bg-white hover:text-primary-dark hover:border-white transition-colors duration-200 hover:shadow-xl"
                  href="mailto:kontakt@albinronnkvist.se"
                  rel="noreferrer"
                >
                  {t('navigation:menu.contact')}
                </motion.a>
              </div>
              <div className="flex flex-row mt-12 md:mt-auto ml-7 md:ml-auto">
                <ChangeLanguage />
                <ChangeTheme />
              </div>
            </div>
          </div>
          
        </nav>
        
      </Headroom>
    </>
  )
}