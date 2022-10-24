import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points=" 8,5 8,1 16,1 16,5"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="22,18 22,23 2,23 2,18"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="9"
                    y="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    width="6"
                    height="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  An educated mind
                  <span className="inline-block text-deep-purple-accent-400">
                    can teach many
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Web-based learning refers to the type of learning that uses
                  the Internet as an instructional delivery tool to carry out
                  various learning activities.
                </p>
              </div>
              <div>
                <Link
                  to="/courses"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 btn btn-outline btn-accent"
                >
                  Explore Our Courses
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
            <h1 className="p-4 text-4xl font-semibold leading-none text-center">
              What our students are saying about us
            </h1>
          </div>
          <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Kriselle, thank you for all of your support and encouragement
                  in my starting this course even though I know nothing at all
                  about cameras other than how to turn it on and what button to
                  push. I very much look forward to speaking with you again
                  soon.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Matt, I want to thank you from the bottom of my heart for
                  making this happen for me. After everything that has happened
                  for my in the last month you really stopped to listen to my
                  needs and wants. Supporting me in every way you possibly can.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?2"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <p className="text-xl font-semibold leading-tight">
                  Michel Josh
                </p>
                <p className="text-sm uppercase">Ux Designer</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  This whole process has been so easy to start, Bryce at
                  Learning Online was very knowledgeable and friendly, he helped
                  me pick the perfect course for me and explained everything
                  involved, his instructions, information and advice were very
                  clear and I was able to start the course that evening, Thank
                  you so much Bryce.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?3"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <p className="text-xl font-semibold leading-tight">
                  Henry
                </p>
                <p className="text-sm uppercase">Front end developer</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Firstly, I did not want to join an online course as previously
                  i have done other animal studies course practically, and was
                  worried i would struggle to learn. However, after the 1st day
                  of joining, the website was easy to access and every was
                  informative and educational. Orr provided exceptional service
                  and answer all my concern and queries, I would definitely
                  recommend for anyone who would like to get into the industry.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?4"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <p className="text-xl font-semibold leading-tight">
                  Mark wood
                </p>
                <p className="text-sm uppercase">Web developer</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Home;