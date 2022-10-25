import React from 'react';

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 min-h-[70vh]">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Do the classes meet at a specific time during the week?
            </summary>
            <div className="px-4 pb-4">
              <p>
                No, all of Academic Earth online courses are offered
                asynchronously so you can complete the coursework at a time that
                is most convenient for you!
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the time commitment for the courses?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Participants are asked to commit 10 hours to the class, which
                works out to two and a half hours a week.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I receive continuing education credit for these courses?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Academic Earth courses are the equivalent of 10 contact hours.
                Upon successful completion of the course, YALSA will issue you a
                certificate of completion indicating the number of contact
                hours. Since continuing education requirements differ by state
                and school district, so it is best to check with your
                institution as to whether they will accept our contact hours for
                continuing education credit.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I pay for the online courses with a check or purchase order?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Yes, if you would like to pay for a course by check or purchase
                order, please contact Linda Braun for a registration form.
                Please include a copy of the purchase order along with the
                registration form. Forms can be either mailed or faxed. Please
                be aware that your registration will not be confirmed until we
                have received your registration form and check or purchase
                order.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              I’ve registered for a course. How do I access it?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                You will receive an email containing your login information one
                business day prior to the first day of the class.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How do I register for the online courses?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>Each course description includes a registration link.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;