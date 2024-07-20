import React from 'react';
import TopMenu from '../TopMenu'
import Footer from '../Footer';
import Link from 'next/link';

const page = () => {
  return (
    <div>
        <TopMenu/>
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div> 
      <div className="grid gap-8 lg:grid-cols-2">
      <Link href="/title-generator">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <img className='h-5 mx-1' src="https://cdn-icons-png.flaticon.com/128/10026/10026257.png" alt="" />
                       Blog
                  </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog Title Generator</h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Understanding your audience is crucial for crafting compelling blog titles. Knowing who your readers are allows you to tailor your titles to their interests, needs, and preferences. Conduct audience research...</p>
              <div className="flex justify-between items-center">
                  
                  <p  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </p>
              </div>
          </article> 
          </Link>
          <Link href="/article-rewriter">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <img className='h-5 mx-1' src="https://cdn-icons-png.flaticon.com/128/10026/10026257.png" alt="" />
                  Blog
                  </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Article Rewriter with AI</h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">AI in article rewriting leverages advanced natural language processing (NLP) and machine learning techniques to transform existing text into new, unique content. These AI systems are trained on vast datasets to...</p>
              <div className="flex justify-between items-center">
                 
                  <p className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </p>
              </div>
          </article>  
          </Link>                
      </div>  
  </div>
</section>
<Footer/>
    </div>
  )
}

export default page
