import { React, useState } from "react";
import { Link } from "react-router-dom";

function InputForm() {
  const [userData, setUserData] = useState("");

  const handleSubmit = () => {
    console.log(userData);
  };

  return (
    <div className="w-screen bg-cyan-600 h-screen">
      <div className="w-[400px] m-auto py-12 bg-cyan-600 ">
        <div className="flex flex-col   gap-4 border border-cyan-600 rounded-md p-4 bg-[#091d31] ">
          <h2 className="text-lg font-semibold text-white">
            Tell us about yourself!
          </h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Name:</label>
            <input
              type="text"
              id="name"
              className="px-3 py-2 rounded-md border-2 border-cyan-600   shadow-sm "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Email:</label>{" "}
            <input
              type="email"
              id="city"
              className="px-3 py-2 rounded-md border-2 border-cyan-600 shadow-sm "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">City:</label>
            <input
              type="text"
              id="city"
              className="px-3 py-2 rounded-md border-2 border-cyan-600 shadow-sm "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Qualifications
            </label>
            <select
              id="qualification"
              className="px-3 py-2 rounded-md border-2  border-cyan-600 shadow-sm "
            >
              <option value="">Select Degree</option>
              <option>Intermediate</option>
              <option>Bachelor's of Sciences</option>
              <option>Master's of Sciences</option>
              <option>Ph.D</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Subjects</label>
            <select
              id="qualification"
              className="px-3 py-2 rounded-md border-2  border-cyan-600 shadow-sm "
            >
              <option value="">Select Subject</option>
              <option>Math</option>
              <option>Physics</option>
              <option>Programming Fundamentals</option>
              <option>Computer</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Age (optional):
            </label>
            <input
              type="number"
              id="age"
              className="px-3 py-2 rounded-md border-2  border-cyan-600 "
            />
          </div>
          <Link
            to="/quiz"
            type="submit"
            value={userData.name}
            onClick={handleSubmit}
            className="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <p className="flex m-auto"> Submit</p>
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}
export default InputForm;
