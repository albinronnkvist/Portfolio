import {useTheme} from 'next-themes'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'

export default function changeTheme() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    theme === "light" ? (
      <motion.button 
        aria-label="Switch to dark theme"
        whileHover={{ scale: 1.1 }} 
        whileFocus={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        className="text-2xl md:text-lg md:mt-0 ml-4 md:ml-1 p-2 lg:px-4 text-center rounded hover:bg-primary-default dark:hover:bg-primary-default dark:hover:text-white transition-colors duration-300"
      >
        <i 
          className="bi bi-brightness-high-fill text-yellow-200" 
        />
      </motion.button>
    ) : (
      <motion.button 
        aria-label="Switch to light theme"
        whileHover={{ scale: 1.1 }} 
        whileFocus={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        className="text-2xl md:text-lg md:mt-0 ml-4 md:ml-1 p-2 lg:px-4 text-center rounded hover:bg-primary-default dark:hover:bg-primary-default dark:hover:text-white transition-colors duration-300"
      >
        <i
          className="bi bi-moon-fill text-yellow-200"
        />
      </motion.button>
    )
  )
}