import React from "react";
import RegisterImage from "/src/assets/img/register-img.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Left Side - Image */}
          <div className="md:w-1/2 w-full sm:p-2">
            <img
              src={RegisterImage}
              alt="Blood Donation"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right Side - Form */}
          <div className="md:w-1/2 w-full p-4 sm:p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
              🩸 Join as a Donor
            </h2>
   
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/* Email / Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email or Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter email or phone number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/* Submit Button */}  
               <Button type="Sign Up"/>

              {/* Already Have  Account */}
              <p className="text-center text-medium text-gray-600 mt-3">
                Already have an account?{" "}
                <Link to="/signin" className="text-pink-800 hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
