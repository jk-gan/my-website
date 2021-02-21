import Head from 'next/head'
import Link from 'next/link'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'

export default function TagPage(props) {
    const { posts, currentTag } = props
    const url = "https://jkgan.com/blog"
    const description = ""
    const title = currentTag

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    
      const fadeInEaseInOut = {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            duration: 0.6,
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
        <title>{`${currentTag} - Gan Jun Kai`}</title>

        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://jkgan.com/bg.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="flex container mx-auto mt-16 w-11/12 2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-10/12">
          <div className="divide-y-2 w-full">
              <div>
                <motion.h1 
                  className="text-left font-bold text-4xl mb-3"
                  variants={fadeInEaseInOut}
                  initial="hidden"
                  animate="visible"
                >
                  {`#${currentTag}`}
                </motion.h1>
              </div>
              <div>
                <motion.ul className="mt-8" variants={fadeIn} initial="hidden" animate="visible" transition={{ delayChildren: 0.15, staggerChildren: 0.15 }}>
                    {posts.map((post, _index) => {
                        return (
                            <motion.li className="mb-10" key={post.id} variants={fadeInEaseInOut}>
                                <Link href={`/blog/${post.slug}`}>
                                    <a className="text-2xl mb-2 font-semibold hover:text-cyan-400">{post.title}</a>
                                </Link>
                                <p className="text-base text-blueGray-500 mb-2">{post.subtitle || '...'}</p>
                                <ul className="flex flex-wrap">
                                  {post.tags.map((tag) => {
                                    return (
                                      <li key={tag} className="mb-2">
                                        <Link href={`/tags/${tag}`}>
                                          <a className="text-sm mr-2 py-1 px-2 rounded-xl bg-blueGray-100 hover:bg-blueGray-200">#{tag}</a>
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                                <p className="text-sm text-blueGray-400">{dayjs(post.date).format('MMMM D, YYYY')}</p>
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

export async function getStaticProps(context) {
    const { promises: fs } = require('fs')
    const matter = require('gray-matter')
    const uniqid = require('uniqid')

    const tag = context.params.tag

    const files = await fs.readdir(`${process.cwd()}/posts`)

    let posts = files
        .filter(fn => fn.endsWith('.md'))
        .map(async fn => {
            const path = `${process.cwd()}/posts/${fn}`
            const rawContent = await fs.readFile(path, 'utf8')
            const { data } = matter(rawContent)
            return { ...data, id: uniqid() }
        })

    posts = (await Promise.all(posts))
        .filter(post => post.tags.includes(tag))
        .sort((a, b) => new Date(b.date) - new Date(a.date))

    return {
        props: { 
          posts, 
          currentTag: tag 
        },
    }
}

export async function getStaticPaths(context) {
    const fs = require('fs')
    const matter = require('gray-matter')

    const files = fs.readdirSync(`${process.cwd()}/posts`, 'utf-8')

    const tags = files
        .filter((fn) => fn.endsWith('.md'))
        .flatMap((fn) => {
            const path = `${process.cwd()}/posts/${fn}`
            const rawContent = fs.readFileSync(path, {
                encoding: 'utf-8',
            })
            const { data } = matter(rawContent)
            const { tags } = data

            return tags || []
        })
        .filter((item, i, arr) => arr.indexOf(item) === i)

    return {
        paths: tags.map((tag) => {
            return {
                params: {
                    tag,
                },
            }
        }),
        fallback: false,
    }
}