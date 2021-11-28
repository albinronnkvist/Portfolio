import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function StarterSubImage({children}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden" 
      variants={{
        hidden: {
          x: 300,
          opacity: 0
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            delay: .2,
            duration: .3
          }
        }
      }}
      className="text-left"
    >
      {children}
    </motion.div>
  )
}