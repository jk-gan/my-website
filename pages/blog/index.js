import Head from 'next/head'
import Link from 'next/link'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'

const Blog = (props) => {
  const url = "https://jk-gan.vercel.app/blog"
  const title = "Blog - Gan Jun Kai"
  const description = "Jun Kai writes about software engineering and programming"

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const fadeInEaseInOut = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      }
    },
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>Blog - Gan Jun Kai</title>

        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://jk-gan.vercel.app/bg.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="flex h-screen container mx-auto mt-10 px-5 xl:w-6/12 md:w-8/12 sm:w-10/12">
          <div className="divide-y-2 w-full">
              <div>
                <h1 className="text-left font-bold text-4xl mb-3">Articles</h1>
              </div>
              <div>
                <motion.ul className="mt-8" variants={fadeIn} initial="hidden" animate="visible" transition={{ delayChildren: 0.1, staggerChildren: 0.2 }}>
                    {props.posts.map((post, _index) => {
                        return (
                            <motion.li className="mb-5" key={post.id} variants={fadeInEaseInOut}>
                                <Link href={`/blog/${post.slug}`}>
                                    <a className="text-2xl font-semibold hover:underline">{post.title}</a>
                                </Link>
                                <p className="text-base text-gray-500">{post.subtitle}</p>
                                <p className="text-sm text-gray-400">{dayjs(post.date).format('MMMM D, YYYY')}</p>
                            </motion.li>
                        )
                    })}
                </motion.ul>
              </div>
          </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
    const fs = require('fs')
    const matter = require('gray-matter')
    const { v4: uuid } = require('uuid')

    const files = fs.readdirSync(`${process.cwd()}/posts`, 'utf-8')

    const posts = files
        .filter((fn) => fn.endsWith('.md'))
        .map((fn) => {
            const path = `${process.cwd()}/posts/${fn}`
            const rawContent = fs.readFileSync(path, {
                encoding: 'utf-8',
            })
            const { data } = matter(rawContent)

            return { ...data, id: uuid() }
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date))

    return {
        props: { posts },
    }
}

export default Blog