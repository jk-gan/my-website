import Head from 'next/head'
import Image from 'next/image'
import dayjs from 'dayjs'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
// import highlight from 'remark-highlight.js'

const renderers = {
    image: image => {
      return (
        // <div style={{ paddingTop: "56.25%", position: "relative" }}>
        <div className="relative aspect-w-16 aspect-h-9">
            <Image className="absolute left-0 top-0 w-full h-auto" src={image.src} alt={image.alt} layout="fill" objectFit="contain" quality={80} />
        </div>
      )
    },
  }

const BlogPostPage = (props) => {
    const domain = 'https://jk-gan.vercel.app'
    const { title, slug, date, content, subtitle, image = `${domain}/bg.jpeg` } = props.post
    const url = `${domain}/blog/${slug}`
    const imageURL = image.includes("http") || image.includes("https") ? image : `${domain}/${image}`

    const fadeInEaseInOut = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            }
        },
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content={subtitle} />
                <title>{title} - Gan Jun Kai</title>

                <meta property="og:url" content={url} />
                <meta property="og:image" content={imageURL} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={subtitle} />
            </Head>
            <div className="flex mx-auto mt-10 mb-16 px-5 w-11/12 xl:w-6/12 lg:w-7/12 md:w-8/12">
                <motion.div className="w-full" variants={fadeInEaseInOut} initial="hidden" animate="visible">
                    <div className="mb-5">
                        <h1 className="text-4xl font-semibold mb-2">{title}</h1>
                        <h3 className="opacity-80 text-2xl text-gray-500 font-medium mb-1">{subtitle}</h3>
                        <p className="opacity-80 text-sm text-gray-400">{dayjs(date).format('MMMM D, YYYY')}</p>
                    </div>
                    <ReactMarkdown 
                        className="prose prose-lg md:prose-xl max-w-none mt-10" 

                        children={content} 
                        renderers={renderers} 
                        allowDangerousHtml 
                    />
                </motion.div>
            </div>
        </>
        )
    }

    export const getStaticProps = async (context) => {
    const fs = require('fs')
    // const highlight = require('remark-highlight.js')
    const matter = require('gray-matter')

    const slug = context.params.slug
    const path = `${process.cwd()}/posts/${slug}.md`

    const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
    })

    const { data, content } = matter(rawContent)

    // const result = await unified()
    //     .use(markdown)
    //     .use(mdx)
    //     .use(highlight)
    //     .use(html)
    //     .process(content)

    return {
        props: { 
            post: { 
                ...data,
                // content: result.toString(),
                content,
            },
        }
    }
}

export const getStaticPaths = async (context) => {
    const fs = require('fs')
    const path = `${process.cwd()}/posts`
    const files = fs.readdirSync(path, 'utf-8')

    const markdownFileNames = files
        .filter((fn) => fn.endsWith('.md'))
        .map((fn) => fn.replace('.md', ''))

    return {
        paths: markdownFileNames.map((fileName) => {
            return {
                params: {
                    slug: fileName,
                },
            }
        }),
        fallback: false,
    }
}

export default BlogPostPage