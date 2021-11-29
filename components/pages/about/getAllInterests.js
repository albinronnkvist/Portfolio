import { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import InterestCard from './interestCard'
import Loading from '../../other/loading'
import { motion } from 'framer-motion'

export default function GetAllInterests({ interests }) {
  let { t } = useTranslation()

  const breakpoints = (width) => {
    if(width < 640) {
      return 'xs';
    } else if(width >= 640 && width < 768 ) {
      return 'sm';
    } else if(width >= 768 && width < 1024) {
      return 'md';
    } else if(width >= 1024) {
      return 'lg';
    }
  };
  
  const [breakpoint, setBreakpoint] = useState(() => breakpoints(typeof window !== 'undefined' && (window.innerWidth)));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calcInnerWidth = function() {
        setBreakpoint(breakpoints(window.innerWidth))
      }
      window.addEventListener('resize', calcInnerWidth)
      return () => window.removeEventListener('resize', calcInnerWidth)
    }
  }, [])

  const [amount, setAmount] = useState(breakpoint)

  useEffect(() => {
    if(breakpoint === "xs" || breakpoint === "sm") {
      setAmount(3)
    } else if (breakpoint === "md") {
      setAmount(4)
    } else if(breakpoint === "lg") {
      setAmount(3)
    }
  }, [breakpoint])

  const onSeeMore = () => {
    if(amount >= interests.length) {
      if(breakpoint === "xs") {
        setAmount(3)
      } else if (breakpoint === "md") {
        setAmount(4)
      } else if(breakpoint === "lg") {
        setAmount(3)
      }
    } else {
      if(breakpoint === "xs" || breakpoint === "sm") {
        setAmount(amount + 3)
      } else if (breakpoint === "md") {
        setAmount(amount + 2)
      } else if(breakpoint === "lg") {
        setAmount(amount + 3)
      }
    }
  }

  return (
    <>
      {interests.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <InterestCard interests={interests.slice(0, amount)} />
            </div>

            <div className="flex flex-row justify-center items-center">
              <motion.button 
                whileHover={{
                  boxShadow: "0px 0px 12px rgb(52, 211, 153)"
                }}
                whileFocus={{ scale: 1.1, boxShadow: "0px 0px 12px rgb(52, 211, 153)" }} 
                onClick={onSeeMore} 
                className="readMore"
              >
                {amount >= interests.length ? (
                    <>
                      {t("common:showLess")}
                    </>
                  ) : (
                    <>
                      {t("common:showMore")}
                    </>
                  )
                }
              </motion.button>
            </div>
          </>
        ) : (
          <Loading />
        )
      }
    </>
  )
}