import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName,photoUrl,email,password);
    }
    
    return (
      <div className="w-full max-w-md mx-auto my-10 border-2 border-amber-200 backdrop-blur-md p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form novalidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1 text-sm">
            <label for="username" className="block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-md border-2 border-amber-200"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block">
              Photo Url
            </label>
            <input
              type="text"
              name="url"
              placeholder="Photo Url"
              required
              className="w-full px-4 py-3 rounded-md border-2 border-amber-200"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-md border-2 border-amber-200"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 border-amber-200"
            />
            
          </div>
          <button type='submit' className="block w-full p-3 text-center btn btn-outline btn-accent rounded-sm">
            Sign Up
          </button>
        </form>
        
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline dark:text-gray-100"
          >
            Log In
          </Link>
        </p>
      </div>
    );
};

export default SignUp;