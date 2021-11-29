import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Image from 'next/image'
import StarterSubTitle from '../../animations/starterSubTitle'
import StarterSubImage from '../../animations/starterSubImage'
import StarterSubText from '../../animations/starterSubText'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Experience() {
  const { t } = useTranslation()

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="experience" className="w-full mt-48 lg:mt-48 flex flex-row justify-end">
      <div className="flex flex-col-reverse md:flex-row justify-end gap-8 xl:gap-12 lg:w-5/6">
        <div className="w-full">
          <StarterSubTitle>
            {t("experience:title")}
          </StarterSubTitle>
          <StarterSubText>
            {t("experience:intro")}
          </StarterSubText>
          <Link href="/experience" scroll={false}>
            <motion.button 
              whileTap={{ scale: 0.9 }} 
              whileHover={{ boxShadow: "0px 0px 12px rgb(52, 211, 153)" }} 
              whileFocus={{ scale: 1.1, boxShadow: "0px 0px 12px rgb(52, 211, 153)" }} 
              initial="hidden" 
              animate={controls}
              ref={ref}
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
              className="mt-6 readMoreFilled"
            >
              {t("common:readMore")} 👉
            </motion.button>
          </Link>
        </div>
        <div className="w-full lg:w-4/6">
          <StarterSubImage>
            <Image 
              src="/images/experience.svg" 
              width={400}
              height={400}
              layout="responsive"
              alt="A guy reading a book"
            />
          </StarterSubImage>
        </div>
      </div>
    </section>
  )
}