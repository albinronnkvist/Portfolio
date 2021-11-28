import { motion } from "framer-motion";

export default function StarterImage({children}) {
  return (
    <motion.div 
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
            delay: 1,
            duration: .3
          }
        }
      }} 
      className="w-full"
    >
      {children}
    </motion.div>
  )
}