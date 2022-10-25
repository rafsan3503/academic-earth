import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FcDownload } from "react-icons/fc";

const CourseDetails = () => {
    const course = useLoaderData();
    const ref = React.createRef();
    return (
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
                {course.feature.map((option) => (
                  <div className="flex">
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
                            <Link to={`/course/${course.id}`} className='btn btn-outline btn-accent'>Get Premium Access</Link>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={course.img}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    );
};

export default CourseDetails;