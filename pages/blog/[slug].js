import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import elixir from 'react-syntax-highlighter/dist/cjs/languages/prism/elixir';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow'

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('diff', diff);
SyntaxHighlighter.registerLanguage('elixir', elixir);

const renderers = {
    image: image => {
      return (
        <div className="relative aspect-w-16 aspect-h-9">
            <Image className="absolute left-0 top-0 w-full h-auto" src={image.src} alt={image.alt} layout="fill" objectFit="contain" quality={80} />
        </div>
      )
    },
    code: ({language, value}) => {
        return <SyntaxHighlighter style={tomorrow} language={language} children={value} />
    }
  }

export default function BlogPostPage(props) {
    const domain = 'https://jkgan.com'
    const { title, slug, date, tags = [], content, subtitle, image = `${domain}/bg.jpeg` } = props.post
    const url = `${domain}/blog/${slug}`
    const imageURL = image.includes("http") || image.includes("https") ? image : `${domain}/${image}`

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
            <div className="flex mx-auto mt-16 mb-16 w-11/12 2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-10/12">
                <div className="w-full">
                    <div className="mb-5">
                        <h1 className="text-4xl font-semibold mb-2">{title}</h1>
                        <h3 className="opacity-80 text-2xl text-blueGray-500 font-medium mb-1">{subtitle}</h3>
                        <ul className="flex flex-wrap">
                            {tags.map((tag) => {
                            return (
                                <li key={tag} className="mb-2">
                                <Link href={`/tags/${tag}`}>
                                    <a className="text-sm mr-2 py-1 px-2 rounded-xl bg-blueGray-100 hover:bg-blueGray-200">#{tag}</a>
                                </Link>
                                </li>
                            )
                        })}
                        </ul>
                        <p className="opacity-80 text-sm text-blueGray-400">{dayjs(date).format('MMMM D, YYYY')}</p>
                    </div>
                    <ReactMarkdown 
                        className="prose prose-lg max-w-none mt-10" 
                        children={content} 
                        renderers={renderers} 
                        allowDangerousHtml 
                    />
                </div>
            </div>
        </>
        )
    }

export async function getStaticProps(context) {
    const { promises: fs } = require('fs')
    const matter = require('gray-matter')

    const slug = context.params.slug
    const path = `${process.cwd()}/posts/${slug}.md`

    const rawContent = await fs.readFile(path, 'utf8')

    const { data, content } = matter(rawContent)

    return {
        props: { 
            post: { 
                ...data,
                content,
            },
        }
    }
}

export async function getStaticPaths(context) {
    const { promises: fs } = require('fs')
    const path = `${process.cwd()}/posts`
    const files = await fs.readdir(path)

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