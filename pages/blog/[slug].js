import Head from 'next/head'
import Image from 'next/image'
import dayjs from 'dayjs'
import ReactMarkdown from 'react-markdown'
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
    const { title, slug, date, content } = props.post
    const url = `https://jk-gan.vercel.app/blog/${slug}`
    const description = "Jun Kai writes about software engineering and programming"

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <title>{title} - Gan Jun Kai</title>

                <meta property="og:url" content={url} />
                <meta property="og:image" content="https://jk-gan.vercel.app/bg.jpeg" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <div className="flex container mx-auto my-10 px-5 2xl:w-6/12 md:w-11/12">
                <div>
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold mb-1">{props.post.title}</h1>
                        <p className="text-base text-gray-400">{dayjs(date).format('MMMM D, YYYY')}</p>
                    </div>
                    <ReactMarkdown 
                        className="prose prose-lg" 
                        children={content} 
                        renderers={renderers} 
                        allowDangerousHtml 
                    />
                </div>
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