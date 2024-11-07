// import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Button } from "../components";
import Divider from "../components/Divider";
import { InputBox } from "../components";

const LoginPage = () => {
  const user = { token: null };

  if (user.token) {
    window.location.replace("/");
  }

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // const [name, value] = e.target; change to one below
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex flex-col gap-y-4 w-1/3 min-h-screen bg-black items-center justify-center p-4">
        <Logo type="login" />
        <span className="text-xl font-semibold text-white">Welcome back!</span>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 h-full items-center justify-center bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#434343] to-black px-6 md:px-10 lg:px-20">
        <div className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="block mb-10 md:hidden">
            <Logo />
          </div>

          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Sign up to your account
              </h2>
            </div>

            <Button
              label="Sign up with Google"
              icon={<FcGoogle />}
              styles="w-full flex items-center justify-center gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => {
              }}
            />

          <Divider
          label="or sign up with email"
          />

          <form action="mt-8 sapce-y-6">
          <InputBox
                label="name"
                name="name"
                type="name"
                isRequired={true}
                placeholder="name"
                value={data?.name}
                onChange={handleChange}
              />

          <InputBox
                  label='Email Address'
                  name='email'
                  type='email'
                  isRequired={true}
                  placeholder='email@example.com'
                  value={data?.email}
                  onChange={handleChange}
                />

                <InputBox
                  label='Password'
                  name='password'
                  type='password'
                  isRequired={true}
                  placeholder='Password'
                  value={data?.password}
                  onChange={handleChange}
                />
          </form>
          </div>
         <span className="text-white"> already have an account? <Link to='/sign-in'className="underline text-white ">Sign-in</Link></span>

        </div>
      </div>

      {/* Toast notification */}
      <Toaster position="top-center" />
    </div>
  );
};

export default LoginPage;
