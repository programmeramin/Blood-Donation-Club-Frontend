import React from "react";
import Button from "../../components/Button";

const ResetPassword = () => {
  return (
    <>
      <div className="min-h-screen flex justify-between items-center bg-gradient-to-b via-white to-red-100 sm:px-8">
        <div className="w-full mt-10 mx-auto bg-white sm:text-3xl text-2xl rounded-2xl p-4 sm:p-8 max-w-md shadow-md text-center border-gray-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Reset Password
          </h2>
          <p className="text-sm text-gray-700 font-medium mb-5">
            Please Enter your email or phone that is use to created your account
            time.
          </p>
          {/** set password form */}

          <div className="w-full text-left">
            <form className="space-y-2">
              {/** enter auth  */}
             <div>
               <label className="block text-sm text-gray-600 font-medium mb-1">
                Enter your email or phone
              </label>
              <input type="text" placeholder="enter email or phone"
               className="w-full text-sm border border-gray-300 rounded-lg px-2 py-2 focus:ring-2 focus:ring-red-400 outline-none"/>
             </div>

                {/** enter otp */}
                  <div>
                    <label className="text-sm font-sm text-gray-600 mb-1">
                     Enter your otp
                    </label>
                     <div className="flex gap-1 py-2 justify-between">
                      {[...Array(5)].map((_, i) =>(
                      <input key={i} type="text" maxLength="1"
                      className="w-8 h-8 sm:w-12 sm:h-12 text-center text-sm font-semibold border rounded-xl shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"/>
                     ))}
                     </div>

                  </div>
                  
                  {/** password */}
                  <div>
                    <label className="block w-full text-sm font-sm text-gray-600">
                      Enter New Password
                    </label>
                    <input type="text" placeholder="Enter new password" className="w-full text-sm px-2 py-2 rounded-lg  border border-gray-300 focus:ring-2 focus:ring-red-300 outline-none mb-2"/>
                  </div>

                  {/** submit button */}
                  <Button type="Reset Password"/>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
