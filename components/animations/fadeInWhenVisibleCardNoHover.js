import { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisibleCardNoHover({ children }) {
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
          x: 100,
          scale: .8,
          opacity: 0
        },
        visible: {
          x: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            delay: .2,
            duration: .5,
            bounce: .3
          }
        }
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}