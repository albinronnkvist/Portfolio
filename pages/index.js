import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import About from '../components/pages/start/about'
import Experience from '../components/pages/start/experience'
import Projects from '../components/pages/start/projects'
import StarterImage from '../components/animations/starterImage'
import { Link, animateScroll as scroll } from "react-scroll"

export default function Home() {
  let { t } = useTranslation()

  const getAge = () => {
    var today = new Date();
    var birthDate = new Date("1997/12/24");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    return age
  }

  return (
    <>
      <section id="start" className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 mt-4 md:mt-12">
          <div className="w-full mb-6 md:mb-0 col-span-1 lg:col-span-2">
            <motion.p initial="hidden" animate="visible" 
              variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .6,
                    duration: .3
                  }
                }
              }} className="italic">
              {t("start:hi")}
            </motion.p>
            <motion.h1 initial="hidden" animate="visible" 
              variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .6,
                    duration: .3
                  }
                }
              }} className="mb-0 mt-0">
              Albin Rönnkvist
            </motion.h1>
            <motion.h2
            initial="hidden" animate="visible" 
              variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .6,
                    duration: .3
                  }
                }
              }} className="text-primary-dark dark:text-primary-default text-2xl md:text-2xl xl:text-3xl">
              {t("start:webDev")}
            </motion.h2>
            
            <img 
              src="/images/profile.png" 
              alt="Profile picture of me" 
              className="block lg:hidden w-2/3 md:w-1/2 rounded bg-primary-dark overflow-hidden mt-10" 
            />

            <motion.p initial="hidden" animate="visible" 
              variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .6,
                    duration: .3
                  }
                }
              }} className="mt-4 md:w-5/6">
              {getAge()}{t("start:intro1")}
            </motion.p>
            <motion.p initial="hidden" animate="visible" 
              variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .6,
                    duration: .3
                  }
                }
              }} className="mt-0 md:w-5/6">
              {t("start:intro2")}
            </motion.p>
            <Link 
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button 
                whileTap={{ scale: 0.9 }} 
                whileHover={{ 
                  y: 3,
                  boxShadow: "0px 0px 12px rgb(52, 211, 153)"
                }} 
                whileFocus={{ 
                  y: 3,
                  scale: 1.1, boxShadow: "0px 0px 12px rgb(52, 211, 153)" 
                }} 
                initial="hidden" 
                animate="visible" 
                variants={{
                  hidden: {
                    scale: .8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .8,
                      duration: .3
                    }
                  }
                }} 
                className="mt-6 readMoreFilled"
              >
                {t("common:readMore")}
              </motion.button>
            </Link>
          </div>
          <StarterImage>
            <div className='w-full h-full hidden lg:block col-span-1 lg:col-span-1'>
              <div 
                className="relative z-0 bg-bottom bg-no-repeat bg-contain h-full rounded bg-primary-dark" 
                style={{backgroundImage: `url(/images/profile.png)`}}
              >
              </div>
            </div>
          </StarterImage>
        </div>
      </section>
      <About />
      <Experience />
      <Projects />
    </>
  )
}