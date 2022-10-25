import React from 'react';

const Blog = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
            data-aos="fade-up-right"
          >
            <img
              src="https://images.ctfassets.net/nx13ojx82pll/60miWU6vSisC1N2IgQRPkt/61066f84608375c590b6dcb68fb47dc0/nodejs-cors-guide-what-it-is-and-how-to-enable-it-picture-1.png?w=1744&h=982&q=80&fm=png"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <h2 className="text-2xl font-bold">What is Cors?</h2>
              <p className="mb-2 text-gray-700">
                CORS stands for Cross-Origin Resource Sharing . It allows us to
                relax the security applied to an API. This is done by bypassing
                the Access-Control-Allow-Origin headers, which specify which
                origins can access the API
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
            data-aos="fade-up-right"
          >
            <img
              src="https://cdn.educba.com/academy/wp-content/uploads/2019/06/How-Node.JS-Works.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <h2 className="text-2xl font-bold">
                What is Node? How does Node work?
              </h2>
              <p className="mb-2 text-gray-700">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
            data-aos="fade-up-right"
          >
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--sbmJX9BV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2kflp5t0kl302gfq567.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <h2 className="text-2xl font-bold">
                How does the private route work?
              </h2>
              <p className="mb-2 text-gray-700">
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
            data-aos="fade-up-right"
          >
            <img
              src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/885818/retina_1708x683_staging.toptal.net_firebase_role-based-firebase-authentication-826a632143cf2f34949096059f93cff1.png"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <h2 className="text-2xl font-bold">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h2>
              <p className="mb-2 text-gray-700">
                Firebase Authentication aims to make building secure
                authentication systems easy, while improving the sign-in and
                onboarding experience for end users. It provides an end-to-end
                identity solution, supporting email and password accounts, phone
                auth, and Google, Twitter, Facebook, and GitHub login, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;