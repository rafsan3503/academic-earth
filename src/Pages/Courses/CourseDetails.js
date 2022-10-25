import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FcDownload } from "react-icons/fc";

const CourseDetails = () => {
  const course = useLoaderData();
  const ref = React.createRef();
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              {course.name}
            </h2>
            <React.Fragment>
              <Pdf targetRef={ref} filename={course.name}>
                {({ toPdf }) => (
                  <button className="btn btn-outline" onClick={toPdf}>
                    Download Pdf <FcDownload />
                  </button>
                )}
              </Pdf>
            </React.Fragment>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div ref={ref}>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Description:
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                {course.description}
              </p>
              <div className="mt-12 space-y-12">
                {course.feature.map((option,_idx) => (
                  <div className="flex" key={_idx}>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        {option}
                      </h4>
                    </div>
                  </div>
                ))}

                <h2 className="text-3xl font-bold">Price: {course.price}$</h2>
                <Link
                  to={`/course/${course.id}`}
                  className="btn btn-outline btn-accent"
                >
                  Get Premium Access
                </Link>
                <Link to="/courses" className="btn btn-outline">
                  Back to courses
                </Link>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={course.img}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
              <section className="p-6 my-6">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
                  <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-9 w-9 dark:text-gray-800"
                      >
                        <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                        <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                        <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                      <p className="text-3xl font-semibold leading-none">
                        {course.orders}
                      </p>
                      <p className="capitalize">Orders</p>
                    </div>
                  </div>
                  <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-9 w-9 dark:text-gray-800"
                      >
                        <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                        <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                        <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                        <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                      <p className="text-3xl font-semibold leading-none">
                        {course.students}
                      </p>
                      <p className="capitalize">New Students</p>
                    </div>
                  </div>
                  <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-9 w-9 dark:text-gray-800"
                      >
                        <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                        <rect width="32" height="32" x="80" y="264"></rect>
                        <rect width="32" height="32" x="240" y="128"></rect>
                        <rect width="32" height="32" x="136" y="168"></rect>
                        <rect width="32" height="32" x="400" y="264"></rect>
                        <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                      <p className="text-3xl font-semibold leading-none">
                        {course.growth}%
                      </p>
                      <p className="capitalize">Growth</p>
                    </div>
                  </div>
                  <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-9 w-9 dark:text-gray-800"
                      >
                        <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                      <p className="text-3xl font-semibold leading-none">
                        {course.ClickRate}%
                      </p>
                      <p className="capitalize">Click rate</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
