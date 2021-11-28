import { motion } from "framer-motion";

export default function StarterTapButton({children}) {
  return (
    <motion.button 
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
            delay: .8,
            duration: .3
          }
        }
      }} 
      className="mt-6 text-left text-xs md:text-sm xl:text-base font-mono dark:text-primary-default text-primary-dark rounded hover:text-opacity-75 transition-opacity duration-300"
    >
      {children}
    </motion.button>
  )
}