import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen container mx-auto">
      <div>
        <h1 className="text-center font-bold text-4xl mb-1">Gan Jun Kai</h1>
        <p className="text-center font-medium text-2xl text-gray-500">Building the World's Most Advanced Education Platform at <a href="https://www.mindvalley.com">Mindvalley</a>.</p>
        <p className="text-center text-lg text-gray-400">Elixir + Rust</p>
        <div className="flex items-center justify-center mt-3 text-gray-300">
          <a href="https://github.com/jk-gan"><FontAwesomeIcon className="mx-2" icon={faGithub} size="2x" /></a>
          <a href="https://twitter.com/jk_gan"><FontAwesomeIcon className="mx-2" icon={faTwitter} size="2x" /></a>
          <a href="https://www.linkedin.com/in/ganjk"><FontAwesomeIcon className="mx-2" icon={faLinkedin} size="2x" /></a>
        </div>
      </div>
    </div>
  )
}
