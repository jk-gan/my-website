const BlogPostPage = (props) => (
    <div>
        <h1>{props.post.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: props.post.content }} />
    </div>
)

export const getStaticProps = async (context) => {
    const fs = require('fs')
    const html = require('remark-html')
    const highlight = require('remark-highlight.js')
    const unified = require('unified')
    const markdown = require('remark-parse')
    const matter = require('gray-matter')

    const slug = context.params.slug
    const path = `${process.cwd()}/posts/${slug}.md`

    const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
    })

    const { data, content } = matter(rawContent)

    const result = await unified()
        .use(markdown)
        .use(highlight)
        .use(html)
        .process(content)

    return {
        props: { 
            post: { 
                ...data,
                content: result.toString(),
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