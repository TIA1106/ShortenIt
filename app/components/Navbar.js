import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
<nav className='fixed top-0 left-0 w-full h-20 px-4 bg-blue-950 flex justify-between items-center text-white'>
            <div className='logo font-bold text-2xl'><Link href="/">ShortenIt</Link></div>
            <ul className='flex justify-between gap-6 items-center'>
                <Link href="/"><li>Home</li></Link>
                    <Link href="/shorten"><li>Shorten</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact Us</li></Link>
                    <li className='flex gap-3'>
                        <Link href="/shorten"><button className='bg-blue-800 font-bold rounded-lg shadow-lg p-4'>Try Now</button></Link>
                        <Link href="/github"><button className='bg-blue-800 font-bold rounded-lg shadow-lg p-4'>GitHub</button></Link>
                    </li>

            </ul>

        </nav>
    )
}

export default Navbar