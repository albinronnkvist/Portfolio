import '../styles/global.css'
import { Router, useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {ThemeProvider} from 'next-themes'
import { motion } from 'framer-motion'
import NProgress from 'nprogress'
import Layout from '../components/layout'
import Meta from '../components/other/meta'
import 'bootstrap-icons/font/bootstrap-icons.css'
import LoadingInitial from '../components/other/loadingInitial'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps, router }) {
  const route = useRouter()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  const onTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    route.events.on('routeChangeComplete', onTop);
    return () => {
      route.events.off('routeChangeComplete', onTop);
    };
  }, [route.events]);

  return (
    <>
      <Meta keywords="meta:keywords" description="meta:description" />
      <div className="dark:bg-black-dark bg-white">
        {loading ? (<LoadingInitial />) : (
          <ThemeProvider attribute="class" defaultTheme="dark">
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" transition={{ type: 'spring', duration: 1 }} variants={{
              pageInitial: {
                y: 200
              },
              pageAnimate: {
                y: 0
              }
            }}>
              {route.pathname !== "/404" ? (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                ) :
                (
                  <Component {...pageProps} />
                )
              }
            </motion.div>
          </ThemeProvider>
        )}
      </div>
    </>
  )
}
