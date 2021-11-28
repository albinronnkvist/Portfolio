import { motion } from "framer-motion";

export default function StarterTitle({children}) {
  return (
    <motion.h1 
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
            delay: .6,
            duration: .3
          }
        }
      }}
      className="text-left"
    >
      {children}
    </motion.h1>
  )
}