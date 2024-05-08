'use client'
import ImageSlideshow from '@/components/images/image-slideshow';
import Link from 'next/link';

//import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className="container grid grid-cols-2 gap-4 p-8 h-[60vh] max-w-5xl mx-auto">
        {/* Primeira coluna */}
        <div className="col-span-1">
          <div className="h-full">
            <ImageSlideshow />
          </div>
        </div>

        {/* Segunda coluna */}
        <div className="col-span-1 flex flex-col justify-center items-center text-center text-white">
          <h1 className="p-2 text-4xl font-black bg-gradient-to-br from-blue-500 via-purple-600 to-violet-500 text-transparent bg-clip-text">NextLevel Food for NextLevel Foodies</h1>
          <p className="text-xl p-4">Taste & share food from all over the world.</p>
          <div className="text-lg flex gap-4">
            <Link href="/community" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 font-semibold">Join the Community</Link>
            <Link href="/meals" className="px-4 py-2 rounded-lg bg-transparent border border-purple-500 hover:border-emerald-600 text-white text-md">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className='p-4 text-lg  text-white leading-relaxed max-w-screen-md mx-auto my-8'>
          <h2 className='text-center py-4 font-semibold text-2xl'>How it works</h2>
          <p className='text-center'> 
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <br></br>
          <p className='text-center'> 
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        

        
            <h2 className='text-center py-4 font-semibold text-2xl'>Why NextLevel Food?</h2>
            <p className='text-center'>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
        </section>
      </main>
    </>
  );
}