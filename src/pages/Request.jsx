import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Request = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [hrAddress, sethrAddress] = useState("");
  const [address, setAddress] = useState("");
  const [duration, setDuration] = useState("");

  const sendRequest = (e) => {
    e.preventDefault();
    alert("You have submitted your request");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };
  return (
    <div className="request flex flex-col md:flex-row justify-center items-center p-5 gap-10 md:h-[100vh] box-border">
      {/* Form / left side */}
      <div className="shadow-md flex-1 flex flex-col w-full h-[100%] p-4 box-border justify-center items-center">
        <img src="\src\assets\schlogo.png" width={80} height={80} alt="logo" />
        <p className="text-2xl font-bold">Request Form</p>
        <div className="w-full p-2.5">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p>Company Name</p>
              <input
                type="text"
                className="border border-black rounded-[8px] p-2 w-full"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Company's HR Email Address</p>
              <input
                type="text"
                className="border border-black rounded-[8px] p-2 w-full"
                onChange={(e) => sethrAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Company Address</p>
              <input
                type="text"
                className="border border-black rounded-[8px] p-2 w-full"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Duration of Internship</p>
              <select
                className="border border-black rounded-[8px] p-2 w-full"
                name="duration"
                id=""
                onChange={(e) => setDuration(e.target.value)}
                required
              >
                <option value="4 weeks">4 weeks</option>
                <option value="6 weeks">6 weeks</option>
                <option value="8 weeks">8 weeks</option>
                <option value="more than 2 months">more than 2 months</option>
              </select>
            </div>
            <div className="flex justify-end items-center p-3 gap-2">
              <button
                onClick={() => alert("Draft saved!")}
                className="border font-semibold p-[8px] rounded-[5px]"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold p-[8px] rounded-[5px]"
                onClick={sendRequest}
              >
                Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Letter Preview / Right Side */}
      <div className="shadow-md flex-1 p-5 box-border h-[100%]  flex flex-col">
        <div className="letter-preview flex flex-col gap-5">
          <p className="font-semibold p-2 text-2xl">Letter Preview</p>
          <hr />
          <div className="letter border rounded-[5px] mt-2 flex flex-col flex-1 p-2 gap-4">
            <div className="sender block ml-auto">
              <p>Mohammed Abdul Basit</p>
              <p>20963242</p>
              <p>4th April, 2025</p>
            </div>
            <div className="receiver">
              <p>Department of Computer Science</p>
              <p>KNUST</p>
              <p>Dear Sir/Madam</p>
            </div>
            <div className="title">
              <p className="text-xl font-semibold text-center underline">
                REQUEST FOR INTERNSHIP LETTER
              </p>
            </div>
            <div className="body">
              <p>
                I write to request for an official internship letter of which I
                would present to the HR of {name || `{Company Name}`} located at{" "}
                {address || `{Company Address}`} to have my internship during
                the upcoming vacation. I intend to have my internship for a
                period of {duration || `{duration}`}.
              </p>
            </div>
            <div className="subscription">
              <p>Thank you</p>
              <p>Yours Sincerely</p>
              <p>Mohammed Abdul Basit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
