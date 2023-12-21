import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedSubject } from "./redux/slice";

function InputForm() {
  const [userData, setUserData] = useState({
    Name: "",
    email: "",
    City: "",
    qualification: "",
    Subject: "",
    age: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (tempVar, field) => {
    const value = tempVar.target.value;
    setUserData((prevData) => ({ ...prevData, [field]: value }));
  };

  const addSubject = () => {
    console.log(userData.Subject)
    dispatch(setSelectedSubject(userData.Subject));
  };

  return (
    <div className="w-screen bg-cyan-600 h-screen">
      <div className="w-[400px] m-auto py-4 bg-cyan-600 ">
        <div className="flex flex-col   gap-2 border border-cyan-600 rounded-md p-4 bg-[#091d31] h-[550px]  ">
          <h2 className="text-lg font-semibold text-white">
            Tell us about yourself!
          </h2>
          <div className="flex flex-col ">
            <label className="text-sm font-medium text-white">Name:</label>
            <input
              type="text"
              id="name"
              className="px-3 py-2 rounded-md border-2 border-cyan-600   shadow-sm "
              onChange={(tempVar) => handleInputChange(tempVar, "Name")}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-sm font-medium text-white">Email:</label>{" "}
            <input
              type="email"
              id="city"
              className="px-3 py-2 rounded-md border-2 border-cyan-600 shadow-sm "
              onChange={(tempVar) => handleInputChange(tempVar, "email")}
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-sm font-medium text-white">City:</label>
            <input
              type="text"
              id="city"
              className="px-3 py-2 rounded-md border-2 border-cyan-600 shadow-sm "
              onChange={(tempVar) => handleInputChange(tempVar, "City")}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-sm font-medium text-white">
              Qualifications
            </label>
            <select
              id="qualification"
              className="px-3 py-2 rounded-md border-2  border-cyan-600 shadow-sm "
              onChange={(tempVar) => handleInputChange(tempVar, "qualification")}
            >
              <option value="">Select Degree</option>
               <option>Intermediate</option>
              <option>Bachelor's of Sciences</option>
              <option>Master's of Sciences</option>
              <option>Ph.D</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label className="text-sm font-medium text-white">Subjects</label>
            <select
              id="qualification"
              className="px-3 py-2 rounded-md border-2  border-cyan-600 shadow-sm "
              onChange={(tempVar) => handleInputChange(tempVar, "Subject")}
              
            >
              <option value="">Select Subject</option>
              <option>Math</option>
              <option>Physics</option>
              <option>Programming Fundamentals</option>
              <option>Computer</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label className="text-sm font-medium text-white">
              Age (optional):
            </label>
            <input
              type="number"
              id="age"
              className="px-3 py-2 rounded-md border-2  border-cyan-600 "
              onChange={(tempVar) => handleInputChange(tempVar, "age")}
            />
          </div>
          <Link
            to="/quiz"
            onClick={addSubject}
            className="inline-flex items-center px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <p className="flex m-auto"> Submit</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
