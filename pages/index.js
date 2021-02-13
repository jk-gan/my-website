import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen container mx-auto px-5">
      <div>
        <h1 className="text-left font-bold text-5xl mb-4">Gan Jun Kai</h1>
        <p className="text-left font-medium text-2xl text-gray-500 mb-1">Building the World's Most Advanced Education Platform at <a href="https://www.mindvalley.com" className="bg-clip-text text-transparent bg-gradient-to-r from-mv-1 viw-mv-2 to-mv-3">Mindvalley</a>.</p>
        <p className="text-left text-lg text-gray-400">Elixir + Rust</p>
        <div className="flex items-center mt-3 text-gray-300">
          <a href="https://github.com/jk-gan"><FontAwesomeIcon className="mr-2 hover:text-gray-400" icon={faGithub} size="2x" /></a>
          <a href="https://twitter.com/jk_gan"><FontAwesomeIcon className="mx-2 hover:text-gray-400" icon={faTwitter} size="2x" /></a>
          <a href="https://www.linkedin.com/in/ganjk"><FontAwesomeIcon className="mx-2 hover:text-gray-400" icon={faLinkedin} size="2x" /></a>
        </div>
      </div>
    </div>
  )
}
