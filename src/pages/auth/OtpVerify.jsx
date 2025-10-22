import React from "react";
import Button from "../../components/Button";

const OtpVerify = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-50 sm:px-8 px-3">
        {/* 🩸 OTP Verification Card */}
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-8 w-full max-w-md mt-10 m-auto text-center border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            OTP Verification
          </h2> 
          <p className="text-gray-500 text-sm mb-6">
            Please enter the 5-digit code sent to your registered email or phone
            number.
          </p>  

          {/* OTP input fields inside form */}
          <form className="w-full max-w-sm mx-auto">
            <div className="flex justify-center gap-3 mb-6 flex-wrap sm:flex-nowrap">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-8 h-8 sm:w-12 sm:h-12 text-center text-xl font-semibold border rounded-xl shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
              ))}
            </div>

            <Button type="Verify OTP"/>
          </form>

          <p className="text-md text-gray-600 mt-4">
            Didn’t receive the code? Don't worry again register after 5 minute🩸.
            
          </p>
        </div>
      </div>  
    </>
  );
};

export default OtpVerify;
