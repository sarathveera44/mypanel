import React from "react";
import AdminLayout from "../component/AdminLayout";

function SignUp() {
  return (
    <AdminLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        <div className="max-w-screen-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-700 py-4 px-6 text-center">
            <h1 className="text-2xl font-semibold text-white">Registration</h1>
          </div>
          <div className="p-4">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Your Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="marital"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Marital Status
                  </label>
                  <select
                    id="marital"
                    name="marital"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Marital Status</option>
                    <option value="Unmarried">Unmarried</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              {/* <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your address"
                ></textarea>
              </div> */}

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="max-w-md w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default SignUp;
