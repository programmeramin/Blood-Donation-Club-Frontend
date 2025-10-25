import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, setMessageEmpty } from "../../features/auth/authSlice";
import { verifyOtp } from "../../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useForm from "../../hooks/useForm";

const OtpVerify = () => {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(authSelect);
  const navigate = useNavigate();

  // ✅ initial otp array (5 boxes)
  const { input, handleInputChange, formReset } = useForm({
    otp: ["", "", "", "", ""],
  });

  console.log(input);
  

  // ✅ create ref for all 5 inputs
  const inputRefs = useRef([]);

  // ✅ handle otp input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) { // only single number allowed
      const newOtp = [...input.otp];
      newOtp[index] = value;
      handleInputChange({ target: { name: "otp", value: newOtp } });

      // ✅ Auto move to next box if value typed
      if (value && index < 4) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // ✅ handle backspace key (move previous input)
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !input.otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // ✅ handle form submit
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    const otpCode = input.otp.join("");
    if (otpCode.length < 5) {
      toast("Please enter full 5-digit OTP", { type: "warning" });
      return;
    }

    // Dispatch verify otp action
    dispatch(verifyOtp({ otp: otpCode }));
  };

 

  // ✅ handle side effects (message or error)
  useEffect(() => {
    if (message) {
      toast(message, {type : "success" });
      formReset();
      dispatch(setMessageEmpty());
      navigate("/sign-in");
    
    }

    if (error) {
      toast(error,  {type : "error" });
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, formReset, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-50 px-3 sm:px-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md text-center border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          OTP Verification
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Please enter the 5-digit code sent to your registered email or phone number.
        </p>

        {/* ✅ OTP Input Form */}
        <form onSubmit={handleVerifyOtp} className="w-full max-w-sm mx-auto">
          <div className="flex justify-center gap-3 mb-6 flex-wrap sm:flex-nowrap">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                value={input.otp[i]}
                ref={(el) => (inputRefs.current[i] = el)}
                onChange={(e) => handleOtpChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl font-semibold border rounded-xl shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full text-medium px-2 sm:text-lg py-2 bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 rounded-lg text-white cursor-pointer mb-3"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-md text-gray-600 mt-4">
          Didn’t receive the code? Please try registering again after 5 minutes 🩸
        </p>
      </div>
    </div>
  );
};

export default OtpVerify;
