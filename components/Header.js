import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex mx-auto mt-12 font-bold mb-5 w-11/12 2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-10/12">
            <ul>
                <li className="inline mr-8">
                    <Link href="/">
                        <a className="link">Home</a>
                    </Link>
                </li>
                <li className="inline mr-8">
                    <Link href="/">
                        <a className="link">About</a>
                    </Link>
                </li>
                <li className="inline mr-8">
                    <Link href="/blog">
                        <a className="link">Writings</a>
                    </Link>
                </li>
                <li className="inline mr-8">
                    <Link href="/tags">
                        <a className="link">Tags</a>
                    </Link>
                </li>
                <a className="link" href="mailto:kuhn96@gmail.com">Contact</a>
                {/* <li className="inline mr-8">
                    <Link href="/contact">
                        <a className="link hover:text-cyan-400">Contact</a>
                    </Link>
                </li> */}
            </ul>
        </header>
    )
}