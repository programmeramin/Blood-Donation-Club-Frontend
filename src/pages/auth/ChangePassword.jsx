import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <>
      <div className="min-h-screen sm:px-8 px-3 justify-between items-center bg-gradient-to-b via-white to-red-50 ">
        <div className="w-full mt-10 sm:p-8 p-4 max-w-md rounded-xl text-center mx-auto shadow-xl border border-gray-200 bg-white ">
          <h2 className="sm:text-3xl text-2xl font-bold text-gray-700 mb-2">
            Change Password
          </h2>
          <p className="text-sm font-sm text-gray-600">
            Please sure that you are a LoggedIn user {""}
          </p>
          <span className="text-sm font-sm text-red-500 mb-4">
            Other wise you didn't change your password.
          </span>

          <form>
            {/** Old password field */}
            <div className="text-left mt-5">
              <label className="text-sm font-sm text-gray-600 mb-2">
                Old Password
              </label>
              <input
                type="text"
                placeholder="Old Password"
                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none mb-2"
              />
            </div>
            {/** New password field */}
            <div className="text-left">
              <label className="text-sm font-sm text-gray-600 mb-2">
                New Password
              </label>
              <input
                type="text"
                placeholder="New Password"
                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none mb-2"
              />
            </div>
            {/** Confirm password field */}
            <div className="text-left">
              <label className="font-sm text-sm text-gray-600 mb-2 ">
                Confirm Password
              </label>
              <input
                type="text"
                placeholder="Confirm Password "
                className="text-sm w-full border border-gray-300 px-2 py-2  rounded-lg focus:ring-2 focus:ring-red-400 outline-none mb-5"
              />
            </div>
            <Button type="Submit" />
          </form>

          <div>
            <p className="mt-1">
              <Link to="/" className="text-sm font-sm text-red-600 underline">
                Don't change password{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
