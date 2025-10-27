import React, { useEffect } from "react";
import RegisterImage from "/src/assets/img/register-img.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, setMessageEmpty } from "../../features/auth/authSlice";
import useForm from "../../hooks/useForm";
import { registerDonor } from "../../features/auth/authApiSlice";
import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(authSelect);
  const navigate = useNavigate();

  const { input, handleInputChange, formReset } = useForm({
    name: "",
    auth: "",
    password: "",
    conPass: "",
  });

  const handleDonorCreate = (e) => {
    e.preventDefault();
    dispatch(registerDonor(input));
    // console.log(registerDonor(input));
  };

  useEffect(() => {
    if (message) {
      toast(message, {type : "success"});
      formReset();
      dispatch(setMessageEmpty());
      window.location.href = "/otp-verify";
    }

    if (error) {
      toast(error, {type: "error"});
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch, formReset, navigate]);

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

            <form onSubmit={handleDonorCreate} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
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
                  name="auth"
                  value={input.auth}
                  onChange={handleInputChange}
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
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
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
                  name="conPass"
                  value={input.conPass}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-medium px-2 sm:text-2xl sm:px-2 py-2 bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 rounded-lg text-white cursor-pointer mb-3"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </form>
            {/* Already Have  Account */}
            <p className="text-center text-medium text-gray-600 mt-3">
              Already have an account?{" "}
              <Link to="/signin" className="text-pink-800 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
