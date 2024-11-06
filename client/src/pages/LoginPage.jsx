import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const LoginPage = () => {
  const user = { token: null };

  if (user.token) {
    window.location.replace("/");
  }

  return (
    <div className="w-full h-[100vh]">  {/* Fixed syntax issue */}
      <div className="hidden md:flex flex-col gap-y-4 w-1/4 min-h-screen bg-black items-center justify-between">
        <Logo type="login"/>
        <span className="text-xl font-semibold text-white" >Welcome, back!</span>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default LoginPage;
