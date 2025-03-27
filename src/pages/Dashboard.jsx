import { Link } from "react-router-dom";
import LetterCard from "../Components/letterCard";
import Navbar from "../Components/Navbar";

const dummyLetters = [
  {
    name: "Paulgee Ventures",
    status: "available",
  },
  {
    name: "DND Comapny Ltd",
    status: "available",
  },
  {
    name: "Consult Company Ltd",
    status: "available",
  },
];

const Dashboard = () => {
  return (
    <>
     {/* navbar  */}
     <div className="flex justify-center items-center flex-col">
        <Navbar name='Asare Patrick'/>
      </div>
      
      {/* recent */}

      <div className="mt-10">
        <h1 className="text-2xl  text-blue-700 font-semibold px-5">Recent</h1>
        <hr />
        <div className="grid md:grid-cols-3 ">
          {dummyLetters.map((card, index) => (
            <LetterCard {...card} key={index} />
          ))}
        </div>
      </div>

      {/* history  */}

      <div className="mt-20">
        <h1 className="text-2xl text-blue-700 font-semibold px-5">History</h1>
        <hr />
        <br />

        <table className="w-full border-t-2 border-b-2 border-blue-700">
          <thead>
            <tr>
              <th className=" p-4">No.</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Department</th>
              <th className="text-left p-4">Year</th>
              <th className="text-left p-4">Duration</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
