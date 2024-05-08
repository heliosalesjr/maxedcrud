'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineFastfood } from "react-icons/md";

function MainHeader() {
    const path = usePathname();
  return (
    <div className='bg-slate-600'>
        <header className="max-w-5xl mx-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="flex items-center space-x-2">
            <MdOutlineFastfood className='text-5xl' />
            <span className="text-2xl font-bold">
            {/* Gradient classes */}
            <span className="p-2 font-black bg-gradient-to-br from-purple-100 via-blue-300 to-violet-200 text-transparent bg-clip-text">
                Helio's
            </span>
            </span>
        </Link>

        <nav>
            <ul className="flex space-x-4">
            <li>
                <Link href="/meals" className={path.startsWith('/meals') ? 'underline hover:font-semibold' : 'hover:font-semibold'}>Browse Meals</Link>
            </li>
            <li>
                <Link href="/community" className={path.startsWith('/community') ? 'underline hover:font-semibold' : 'hover:font-semibold'}>Community</Link>
            </li>
            </ul>
        </nav>
        </header>
    </div>
    
  );
}

export default MainHeader;
