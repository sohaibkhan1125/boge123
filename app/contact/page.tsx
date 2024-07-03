import React from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu />
      <h1 className='text-center text-3xl font-bold mt-5'>Contact Us</h1>
      <main className="flex-grow flex items-center justify-center py-10">
       
        <form
          id="fs-frm"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/mnnaqvoz"
          method="post"
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
        >
          <fieldset id="fs-frm-inputs" className="space-y-6">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="First and Last"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="email@domain.tld"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message here"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
            <input
              type="hidden"
              name="_to"
              value="harrisonoriahi@gmail.com"
            />
          </fieldset>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
