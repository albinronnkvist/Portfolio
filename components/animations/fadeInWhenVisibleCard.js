import { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisibleCard({ children }) {
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
      whileHover={{
        y: -5,
        transition: { ease: "easeOut", duration: .3 },
        boxShadow: "0px 0px 12px rgb(52, 211, 153)"
      }}
      whileFocus={{
        y: -5,
        transition: { ease: "easeOut", duration: .3 },
        boxShadow: "0px 0px 12px rgb(52, 211, 153)"
      }}
      className="eduCard cursor-pointer w-full relative"
    >
      {children}
    </motion.div>
  );
}