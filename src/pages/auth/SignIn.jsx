import React, { useEffect } from "react";
import LoginLogo from "/src/assets/img/register-img.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, setMessageEmpty } from "../../features/auth/authSlice";
import { signIn } from "../../features/auth/authApiSlice";
import useForm from "../../hooks/useForm";
import { toast } from "react-toastify";

const SignIn = () => {

  const dispatch = useDispatch();
  const {error, message, loading} = useSelector(authSelect);
  const {input, handleInputChange, formReset} = useForm({
    auth: "",
    password: "",
  });

  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = await dispatch(signIn(input));
    if(res.type === "auth/signIn/fulfilled"){
      localStorage.setItem("loginUser", JSON.stringify(res.payload.loginUser));
    }
  }

  useEffect(() =>{
    if(message){
      toast(message, {type : "success"});
      formReset();
      setMessageEmpty();
      window.location.href = "/dashboard";
      
    }

    if(error){
      toast(error, {type : "error"});
      
    }

  })

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl my-15 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/** Left side image */}
          <div className="md:w-1/2 flex">
            <img src={LoginLogo} alt="login side img"/>
          </div>

          {/** Right side image */}
          <div className="md:w-1/2 p-4 mt-8 sm:p-8 flex flex-col w-full justify-center mb-5 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl text-center font-bold text-red-600 mb-6">
              🩸 Join as a Donor
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/** Email or Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Emaill or Phone
                </label>

                <input
                  type="text"
                  name="auth"
                  value={input.auth}
                  onChange={handleInputChange}
                  placeholder="Enter Email or Phone......"
                  className="w-full border border-gray-300 rounded-lg px-2 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/** Password  */}

              <div className="">
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Password
                </label>

                <input
                  type="text"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  placeholder="Enter Your Password"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-red-400 outline-none mb-3"
                />
              </div>

              {/** Forgot password */}
              <p className="text-center text-medium text-gray-700 mb-3">
                Don't recognize password {""}
                <Link
                  to="/forgot-password"
                  className="text-medium text-pink-800 underline"
                >
                  Forgot
                </Link>
              </p>

              {/** submit button */}
              <button type="submit" className="w-full text-medium px-2 sm:text-2xl sm:px-2 py-2 bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 rounded-lg text-white cursor-pointer mb-3">
                  {loading ? "Loading..." : "Sign In"}
              </button>
            </form>
            {/** Already have an account */}
            <p className="text-center text-medium text-gray-800 mt-4">
              Don't have an account {""}
              <Link to="/sign-up" className="text-pink-800 underline">
                Register
              </Link>   
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn
