import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.name.value;
    const photoUrl = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    let correctEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    if (!correctEmail.test(email)) {
      toast.error("Invalid Email!!");
      return;
    }

    if (!/(?=.*[a-zA-Z])/.test(password)) {
      toast.error("password must have letters!!");
      return;
    }
    if (!/(?=.*\d)/.test(password)) {
      toast.error("password must contain digits!!");
      return;
    }
    if (!/(?=.*[!#$%&? "])/.test(password)) {
      toast.error("password should contain special character!!");
      return;
    }
    if (password.length < 8) {
      toast.error("password must be more than 8 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUserInfo(fullName, photoUrl)
          .then((result) => {})
          .catch((error) => {
            toast.error(error.message);
          });
        toast.success("Success! Log In now");
        console.log(result.user);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto my-10 border-2 border-amber-200  p-8 space-y-3 rounded-xl z-0">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form action="" className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block">
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
          <label htmlFor="username" className="block">
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
          <label htmlFor="username" className="block">
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
          <label htmlFor="password" className="block dark:text-gray-400">
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
        <button
          type="submit"
          className="block w-full p-3 text-center btn btn-outline btn-accent rounded-sm"
        >
          Sign Up
        </button>
      </form>

      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Already have an account?
        <Link to="/login" className="underline dark:text-gray-100">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
