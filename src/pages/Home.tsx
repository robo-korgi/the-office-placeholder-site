import { useState } from 'react';

export function Home() {
  const [playVideo, setPlayVideo] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Limitless Paper in a Paperless World
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Dunder Mifflin - The People Person's Paper People. Proudly serving Scranton and the
              greater northeastern Pennsylvania region since 1949. We're not just a paper company,
              we're a family.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#17459D] rounded-md">
                Request a Quote
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span>Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img src="/hero.webp" alt="Hero Illustration" width="616" height="617" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Section Title - Dunder Mifflin Benefits */}
      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase">
          Why Choose Dunder Mifflin
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          More Than Just Paper
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          At Dunder Mifflin, we understand that in today's digital world, quality paper products
          are more important than ever. We combine old-fashioned customer service with premium paper
          products to deliver an unmatched experience.
        </p>
      </div>

      {/* Benefits One */}
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img src="/benefit-one.webp" alt="Benefits" width="521" height="521" className="object-cover" />
          </div>
        </div>

        <div className="flex flex-wrap items-center w-full lg:w-1/2">
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Premium Quality Paper Products
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                From copy paper to specialty items, we stock the finest selection of paper products in the region. Our commitment to quality means your business always makes the best impression.
              </p>
            </div>

            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#17459D] rounded-md w-11 h-11">
                  <div className="w-7 h-7 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Personal Customer Service
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Talk to real people who actually care about your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#17459D] rounded-md w-11 h-11">
                  <div className="w-7 h-7 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Competitive Pricing
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Get the best value without compromising on quality or service.
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#17459D] rounded-md w-11 h-11">
                  <div className="w-7 h-7 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Fast, Reliable Delivery
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Same-day delivery available for orders placed before noon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Two */}
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
          <div>
            <img src="/benefit-two.webp" alt="Benefits" width="521" height="521" className="object-cover" />
          </div>
        </div>

        <div className="flex flex-wrap items-center w-full lg:w-1/2">
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Full-Service Office Solutions
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Beyond paper, we offer a complete range of office supplies and services. From ink cartridges to custom printing, Dunder Mifflin is your one-stop shop for all workplace needs.
              </p>
            </div>

            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#17459D] rounded-md w-11 h-11">
                  <div className="w-7 h-7 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Online Ordering System
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Order 24/7 through our easy-to-use online portal.
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#17459D] rounded-md w-11 h-11">
                  <div className="w-7 h-7 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Custom Solutions
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Tailored ordering plans for businesses of all sizes.
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#17459D] rounded-md w-11 h-11">
                  <div className="w-7 h-7 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Local Expertise
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Over 75 years serving the Scranton business community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container p-8 mx-auto xl:px-0">
        <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-[#17459D] cursor-pointer bg-gradient-to-tr from-[#2563eb] to-[#17459D]">
          {!playVideo && (
            <button
              onClick={() => setPlayVideo(!playVideo)}
              className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              src="https://www.youtube-nocookie.com/embed/cCuykDBkSS8?controls=0&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full aspect-video"
            ></iframe>
          )}
        </div>
      </div>

      {/* Section Title - Testimonials */}
      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase">
          Client Success Stories
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          What Our Customers Are Saying
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Don't just take our word for it. See what businesses across northeastern Pennsylvania
          are saying about their experience with Dunder Mifflin.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="container p-8 mx-auto xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-[#262626] px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal text-[#d1d5db]">
                We've been with Dunder Mifflin for over <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">15 years</mark>
                {" "}and their customer service is unmatched. They truly understand our business needs.
              </p>

              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img src="/photo-1580489944761-15a19d654956.jpeg" width="56" height="56" alt="Avatar" className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#d1d5db]">Barbara Allen</div>
                  <div className="text-gray-400 dark:text-gray-400">Office Manager, Scranton Regional Hospital</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between w-full h-full bg-[#262626] px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal text-[#d1d5db]">
                Switching to Dunder Mifflin was the <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">best decision</mark>
                {" "}for our company. Their prices can't be beat!
              </p>

              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img src="/photo-1507003211169-0a1dd7228f2d.jpeg" width="56" height="56" alt="Avatar" className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#d1d5db]">Tom Martinez</div>
                  <div className="text-gray-400 dark:text-gray-400">Facilities Director, Scranton Business Park</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between w-full h-full bg-[#262626] px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal text-[#d1d5db]">
                The <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">personal touch</mark> Dunder Mifflin
                brings to every order makes all the difference for our team.
              </p>

              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img
                    src="/photo-1534528741775-53994a69daeb.jpeg"
                    width="56"
                    height="56"
                    alt="Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#d1d5db]">Jennifer Chen</div>
                  <div className="text-gray-400 dark:text-gray-400">Principal, Scranton Elementary School</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Title - FAQ */}
      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase">
          FAQ
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Got Questions?
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Here are answers to some of the most common questions we receive about our products
          and services. Don't see your question? Give us a call!
        </p>
      </div>

      {/* FAQ Section */}
      <div className="container p-8 mx-auto xl:px-0 !p-0">
        <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
          <div className="mb-5">
            <button
              onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg bg-[#262626] hover:bg-[#262626] focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 cursor-pointer"
            >
              <span>What areas does Dunder Mifflin serve?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${openIndex === 0 ? "transform rotate-180" : ""} w-5 h-5 text-[#17459D] transition-transform`}
              >
                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>
            {openIndex === 0 && (
              <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                We proudly serve Scranton and the entire northeastern Pennsylvania region, including Wilkes-Barre, Carbondale, and surrounding areas. Same-day delivery is available for orders placed before noon.
              </div>
            )}
          </div>

          <div className="mb-5">
            <button
              onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
              className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg bg-[#262626] hover:bg-[#262626] focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 cursor-pointer"
            >
              <span>Do you offer bulk discounts?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${openIndex === 1 ? "transform rotate-180" : ""} w-5 h-5 text-[#17459D] transition-transform`}
              >
                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>
            {openIndex === 1 && (
              <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                Absolutely! We offer competitive volume pricing for all our products. The more you order, the more you save. Contact our sales team for a customized quote based on your business needs.
              </div>
            )}
          </div>

          <div className="mb-5">
            <button
              onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
              className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg bg-[#262626] hover:bg-[#262626] focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 cursor-pointer"
            >
              <span>What types of paper products do you carry?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${openIndex === 2 ? "transform rotate-180" : ""} w-5 h-5 text-[#17459D] transition-transform`}
              >
                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>
            {openIndex === 2 && (
              <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                We stock everything from standard copy paper and cardstock to specialty papers including glossy, matte, and recycled options. We also carry envelopes, labels, and custom printing services for letterhead and business cards.
              </div>
            )}
          </div>

          <div className="mb-5">
            <button
              onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
              className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg bg-[#262626] hover:bg-[#262626] focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 cursor-pointer"
            >
              <span>How can I place an order?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${openIndex === 3 ? "transform rotate-180" : ""} w-5 h-5 text-[#17459D] transition-transform`}
              >
                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>
            {openIndex === 3 && (
              <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                Ordering is easy! You can call us directly at (570) 555-0100, use our online ordering portal, or visit our Scranton showroom. Our sales team is available Monday through Friday, 8 AM to 6 PM EST.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
