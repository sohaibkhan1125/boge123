import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainContent = () => {
  return (
    <div>
      <section className="bg-white text-black">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Our Latest Tools</h2>

      <p className="mt-4">
        We provide latest ai content generators tools that's are very helpful for you and all of these tools are free for you.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Link href={'/dashboard'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://cdn-icons-png.flaticon.com/128/2593/2593549.png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Blog Generator</h2>

        <p className="mt-1 text-sm ">
          This ai tool will generate complete blog content according to your blog title and your niche within seconds.
        </p>
     
      </Link>
      
      <Link href={'/dashboard'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
       <Image src={'https://cdn-icons-png.flaticon.com/128/1384/1384060.png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">YouTube Description Generator</h2>

        <p className="mt-1 text-sm ">
          This tool will generate complete youtube video description according to your youtube video title.
        </p>
      
      </Link>

      <Link href={'/dashboard'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
       <Image src={'https://cdn-icons-png.flaticon.com/128/6062/6062646.png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Code Generator</h2>

        <p className="mt-1 text-sm ">
         This ai tool will generate different programming languages like html, javascript etc codes according to your need.
        </p>
     
      </Link>

      <Link href={'/dashboard'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://cdn-icons-png.flaticon.com/128/14029/14029439.png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Article Rewriter</h2>

        <p className="mt-1 text-sm ">
         This tool will rewriter your article and will imporve your text and fix grammar mistakes of your content.
        </p>
     
      </Link>

      <Link href={'/dashboard'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
     
    
        <Image src={'https://cdn-icons-png.flaticon.com/128/7045/7045432.png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Hashtags Generator</h2>

        <p className="mt-1 text-sm ">
          This tool will generate hastags according to your given prompt. Enter prompt and get result quickly.
        </p>
      
      </Link>

      <Link href={'/dashboard'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://cdn-icons-png.flaticon.com/128/7635/7635873.png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Article Summarizer</h2>

        <p className="mt-1 text-sm ">
          This ai article summarizer tool will quickly summarize your aritlce within few lines and provide result quickly.
        </p>
      
      </Link>
    </div>

    <div className="mt-12 text-center">
      <Link href={'/dashboard'}         className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
      
        Get Started Today
      
      </Link>
    </div>
  </div>
</section>
    </div>
  )
}

export default MainContent
