import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import FadeInWhenVisibleCardWithPadding from '../../components/animations/fadeInWhenVisibleCardWithPadding'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function BasicCard({ interests }) {
  const { locale } = useRouter()

  return (
    <>
      {interests.map((interest, index) => (
          <FadeInWhenVisibleCardWithPadding key={index}>
            <div className="w-full">
              <div className="flex flex-row justify-between mb-4">
                <h3>
                  {locale === "sv" ? interest.title : interest.titleEn}
                </h3>
                {interest.links.length > 0 && (
                  <div className="flex flex-row gap-4">
                    {interest.links.map((l, index) => (
                      <motion.a
                        whileTap={{ scale: 0.9 }}
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
                              duration: .3
                            }
                          }
                        }} 
                        key={index} 
                        href={l.url} 
                        target="_blank"
                        className="text-lg lg:text-xl xl:text-2xl dark:text-primary-default text-primary-dark"
                        aria-label={`${l.icon.substr(6)}`}
                        rel="noreferrer"
                      >
                        <i className={l.icon} />
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <Carousel showArrows={false} autoPlay={true} showStatus={false} infiniteLoop={true} showThumbs={false}>
              {interest.images.map(img => (
                <div 
                  className="relative z-0 bg-cover bg-center h-72 rounded" 
                  style={{backgroundImage: `url(${img.url})`}}
                  key={img.alt}
                >
                  <p className="absolute bottom-8 left-2 z-30 dark:text-white text-black-dark text-sm p-1 rounded">
                    {locale === "sv" ? img.alt : img.altEn}
                  </p>
                  <div className="absolute bottom-0 left-0 z-20 w-full h-36 bg-gradient-to-t dark:from-gray-light from-white"></div>
                </div>
                
              ))}
            </Carousel>
            <div className="w-full mt-4">
              <p className="text-xs xl:text-sm leading-5">
                {locale === "sv" ? interest.text : interest.textEn}
              </p>
            </div>
          </FadeInWhenVisibleCardWithPadding>
      ))}
    </>
  )
}