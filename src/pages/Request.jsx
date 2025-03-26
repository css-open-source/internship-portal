import { Link } from "react-router-dom";

const Request = () => {
  return (
    <>
      {/* picture */}
      <div className="flex flex-col md:flex-row gap-4 p-4 mt-1 ">
        <div className="relative  rounded-lg">
          <img
            src="\src\assets\loginpic.jpg"
            alt="login pic"
            className="filter brightness-50 w-full h-full object-cover rounded-lg flex-auto  "
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white  capitalize  text-6xl font-serif text-center">
            the backbone <br />
            <br /> of <br />
            <br /> mordern <br />
            <br />
            technology
          </div>
        </div>

        {/* form box */}

        <div className="flex-auto  px-20 py-10 rounded-lg ">
          {/* logo */}
          <div className="flex justify-center items-center  ">
            <img src="src\assets\schlogo.png" className="rounded-full" />
          </div>

          {/* title */}
          <h1 className=" flex justify-center mt-2 text-2xl font-bold text-gray-700">
            Sign Up
          </h1>
          <p className="flex justify-center mt-2">
            Start your 30 days trial now. No Credit card{" "}
          </p>

          {/* form */}
          <form className="flex flex-col mt-10">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="block w-md p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
            />
            <br />
            <label
              htmlFor="programme"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Programme:
            </label>
            <input
              type="text"
              id="programme"
              name="programme"
              placeholder="Computer Science"
              autoComplete=""
              className="block w-md p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
            />
            <br />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name=" email"
              placeholder="Enter your student mail"
              className="block w-md p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
            />
            <br />
            <label
              htmlFor="reference no"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Reference No:
            </label>
            <input
              type="text"
              id="reference no"
              name="reference no"
              placeholder="12345678"
              className="block w-md p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
            />
            <br />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*************"
              className="block w-md p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
            />
            <br />
            <br />
            {/* submit button */}

            <div className="relative">
              <Link>
                <input
                  type="submit"
                  value="Submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 w-md cursor-pointer"
                />
              </Link>
              <br />
              <br />
              <div className="flex items-center">
                <hr className="w-full border-gray-300" />
                <span className="px-4 text-gray-600">or</span>
                <hr className="w-full border-gray-300" />
              </div>
              <br />
              <Link to="">
                <button className="flex justify-center px-4 py-2 text-sm font-medium text-black  border-1 rounded hover:bg-blue-700 hover:text-white focus:outline-none w-md cursor-pointer">
                  <img src="src\assets\Vector.png" className="h-4 w-4 mr-2" />
                  Sign up with Google
                </button>
              </Link>
              <br />
              <br />

              <p className="flex justify-center">
                Already have an account?
                <Link to="">
                  <span className="text-blue-600"> Log In</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Request;
