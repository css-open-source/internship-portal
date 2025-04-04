import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="flex-1 flex justify-center items-center flex-col overflow-auto">
      <div className="header flex flex-col gap-3 justify-center items-center">
        <img src="src\assets\schlogo.png" className="" />
        <h1 className="text-center text-3xl font-bold">Sign In</h1>
        <p className="text-center">Sign In and make a request</p>
      </div>

      {/* form */}
      <div className="form w-full flex justify-center">
        <form className="flex flex-col justify-around gap-5 w-[90%]">
          <div className="flex flex-col">
            <label
              htmlFor="reference-no"
              className="text-sm font-medium text-gray-700 mb-3"
            >
              Reference No:
            </label>
            <input
              type="text"
              id="reference-no"
              name="reference"
              placeholder="12345678"
              className="p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className=" text-sm font-medium text-gray-700 mb-3"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*************"
              className="p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>

          {/* submit button */}
          <div>
            <Link to="/dashboard">
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer w-full"
              >
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
      <p className="text-center mt-5">
        Haven't signed up yet?{" "}
        <Link to="/">
          <span className="text-blue-600 font-medium"> Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
