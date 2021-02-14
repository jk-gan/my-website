import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const url = "https://jk-gan.vercel.app"
  const title = "Gan Jun Kai"
  const description = "Jun Kai writes about software engineering and programming"

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const fadeInEaseIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        ease: "easeIn",
      }
    },
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>Gan Jun Kai's website</title>

        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://jk-gan.vercel.app/bg.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="flex items-center justify-center h-screen container mx-auto px-5 xl:w-6/12 md:w-8/12 sm:w-10/12">
        <div>
          <motion.h1 
            className="text-left font-bold text-5xl mb-3"
            variants={fadeInEaseIn}
            initial="hidden"
            animate="visible"
          >
            Gan Jun Kai
          </motion.h1>
          <motion.p 
            className="text-left font-medium text-2xl text-gray-500 mb-1"
            variants={fadeInEaseIn}
            initial="hidden"
            animate="visible"
           >
             Making the web better and building the World's Most Advanced Education Platform at <a href="https://www.mindvalley.com" className="bg-clip-text text-transparent bg-gradient-to-r from-mv-1 viw-mv-2 to-mv-3">Mindvalley</a>
          </motion.p>
          <motion.p 
            className="text-left text-lg text-gray-400"
            variants={fadeInEaseIn}
            initial="hidden"
            animate="visible"
          >
            Full stack developer · Elixir · Rust · React
          </motion.p>
          <motion.div className="flex items-center mt-3 text-gray-300 divide-x" variants={fadeIn} initial="hidden" animate="visible" transition={{ delayChildren: 0.25, staggerChildren: 0.27, ease: "easeInOut" }}>
            <div>
              <motion.a 
                href="https://github.com/jk-gan"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon className="mr-2 hover:text-gray-400" icon={faGithub} size="1x" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/jk_gan"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                 <FontAwesomeIcon className="mx-2 hover:text-gray-400" icon={faTwitter} size="1x" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ganjk"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon className="ml-2 mr-4 hover:text-gray-400" icon={faLinkedin} size="1x" />
              </motion.a>
            </div>
            <div>
              <Link href="/blog">
                <motion.a 
                  className="ml-4 mr-2 cursor-pointer hover:text-gray-400" 
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
                >
                  Blog
                </motion.a>
              </Link>
              <motion.a 
                className="mx-2 hover:text-gray-400" 
                href="mailto:kuhn96@gmail.com" 
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
