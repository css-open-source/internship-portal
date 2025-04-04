import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({name}) => {
  return (
      <>
          <div className="flex bg-blue-700 w-full h-15 justify-between">
          <div className="flex py-1 px-5">
            <img
              src="src\assets\schlogo.png"
              alt="logo"
              className="brightness-800"
            />
          </div>

          <div div className="flex py-5 px-5">
            <Link to="/signin">
              <button className="ml-3 px-4 py-1 bg-white text-black rounded-md w-30 shadow-md cursor-pointer hover:scale-95">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* secondnavbar  */}
        <div className="flex bg-white w-svh h-20 justify-between px-4 shadow-md rounded-b-lg  ">
          <div className="flex py-5 px-5">
                <h1 className='font-semibold'>USER:  <span className="font-bold "> {name }</span></h1>
          </div>

          <div div className="flex p-5 ">
            <Link to="/request">
            <button className="ml-3 px-4 py-1 bg-blue-700 text-white rounded-md w-30 shadow-md cursor-pointer hover:scale-95">
              Request
            </button>
            </Link>
          </div>
        </div>
      </>
  )
}

export default Navbar