import React from "react";

const OtpVerify = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-50 px-4">
        {/* 🩸 OTP Verification Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            OTP Verification
          </h2> 
          <p className="text-gray-500 text-sm mb-6">
            Please enter the 5-digit code sent to your registered email or phone
            number.
          </p>  

          {/* OTP input fields inside form */}
          <form>
            <div className="flex justify-center gap-3 mb-6">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl font-semibold border rounded-xl shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full py-2 transition-all duration-200 shadow-md"
            >
              Verify OTP
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Didn’t receive the code?{" "}
            <span className="text-red-600 font-semibold hover:underline cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
