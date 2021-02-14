import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const url = "https://jk-gan.vercel.app"
  const title = "Gan Jun Kai"
  const description = "Jun Kai writes about software engineering and programming"

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
      <div className="flex items-center justify-center h-screen container mx-auto px-5 2xl:w-6/12 md:w-11/12">
        <div>
          <h1 className="text-left font-bold text-5xl mb-4">Gan Jun Kai</h1>
          <p className="text-left font-medium text-2xl text-gray-500 mb-1">Making the web better and building the World's Most Advanced Education Platform at <a href="https://www.mindvalley.com" className="bg-clip-text text-transparent bg-gradient-to-r from-mv-1 viw-mv-2 to-mv-3">Mindvalley</a></p>
          <p className="text-left text-lg text-gray-400">Full stack developer · Elixir · Rust · React</p>
          <div className="flex items-center mt-3 text-gray-300 divide-x">
            <div>
              <a href="https://github.com/jk-gan"><FontAwesomeIcon className="mr-2 hover:text-gray-400" icon={faGithub} size="1x" /></a>
              <a href="https://twitter.com/jk_gan"><FontAwesomeIcon className="mx-2 hover:text-gray-400" icon={faTwitter} size="1x" /></a>
              <a href="https://www.linkedin.com/in/ganjk"><FontAwesomeIcon className="ml-2 mr-4 hover:text-gray-400" icon={faLinkedin} size="1x" /></a>
            </div>
            <div>
              <Link href="/blog"><a className="ml-4 mr-2 hover:text-gray-400">Blog</a></Link>
              <a className="mx-2 hover:text-gray-400" href="mailto:kuhn96@gmail.com">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
