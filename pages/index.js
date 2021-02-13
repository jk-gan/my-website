import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-center font-bold text-4xl mb-1">Gan Jun Kai</h1>
        <p className="text-center font-medium text-2xl text-gray-500">Building the World's Most Advanced Education Platform at <a href="https://www.mindvalley.com">Mindvalley</a>.</p>
        <p className="text-center text-lg text-gray-400">Elixir + Rust</p>
      </div>
    </div>
  )
}
