import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function StarterSubText({children}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.p 
      ref={ref}
      initial="hidden"  
      animate={controls} 
      variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .3,
            duration: .3
          }
        }
      }} 
      className="mt-4"
    >
      {children}
    </motion.p>
  )
}