import React from "react";
import Button from "../../components/Button";

const ForgotPassword = () => {
  return (
    <>
      <div className="min-h-screen justify-center items-center bg-gradient-to-b to-red-50 via-white sm:px-8 flex">
        {/** Email forgot card */}

        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-8 w-full max-w-md text-center border-gray-300">
          <h2 className="sm:text-3xl text-2xl font-bold text-gray-800 mb-2 ">
            Forgot Password
          </h2>
          <p className="text-sm font-medium text-gray-500 mb-2">
            Please enter the email or phone that is use to created your account
            time.
          </p>

          {/** form forgot email */}
          <div className="w-full text-left">
            <form>
              <div>
                <label className="block text-md font-medium text-gray-600 mb-1">
                  Enter email or phone
                </label>
                <input
                  type="text"
                  placeholder="Enter email or phone......."
                  className="w-full border border-gray-300 p-2 rounded-sm outline-none mb-5 ring-2 focus:ring-red-300"
                />
              </div>

              <Button type="Forgot Password" />

              <p className="text-center text-md font-sm text-gray-600 ">
                Didn't recieve code? {}
                <button
                  type="submit"
                  className="text-md text-red-600 underline"
                >
                  Resend
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
