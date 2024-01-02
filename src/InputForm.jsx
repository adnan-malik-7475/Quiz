import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedSubject } from "./redux/slice";
import TextInput from "./InputComponent";
import Dropdown from "./dropDownComponent"

function InputForm() {
  const [userData, setUserData] = useState({
    Name: "",
    email: "",
    City: "",
    qualification: "",
    Subject: "",
    age: "",
  });

  const qualificationOptions = ["Matric ", "Intermediate", "Bachelor's of Sciences", "Master's of Sciences", "Ph.D"];

  const subjectOptions = [ "Math", "Physics", "Programming Fundamentals", "Computer"];

  const dispatch = useDispatch();

  const handleInputChange = (tempVar, field) => {
    const value = tempVar.target.value;
    setUserData((prevData) => ({ ...prevData, [field]: value }));
  };

  const addSubject = () => {
    console.log(userData.Subject);
    dispatch(setSelectedSubject(userData.Subject));
  };

  return (
    <div className="w-screen bg-cyan-600 h-screen">
      <div className="w-[500px]  m-auto py-4 bg-cyan-600 ">
        <div className="flex flex-col gap-2 border border-cyan-600 rounded-md p-4 bg-[#091d31] h-[580px]  ">
          <h2 className="text-lg font-semibold text-white">Tell us about yourself!</h2>
          <div>
            <label className="text-white">Name:</label>
            <TextInput
              type="text"
              id="name"
              onChange={(tempVar) => handleInputChange(tempVar, "Name")}
            />
          </div>
          <div>
            <label className="text-white">Email:</label>
            <TextInput
              type="email"
              id="city"
              onChange={(tempVar) => handleInputChange(tempVar, "email")}
            />
          </div>
          <div>
            <label className="text-white">City:</label>
            <TextInput
              type="text"
              id="city"
              onChange={(tempVar) => handleInputChange(tempVar, "City")}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-white">Qualifications:</label>
            <Dropdown
              id="qualification"
              value={userData.qualification}
              onChange={(tempVar) => handleInputChange(tempVar, "qualification")}
              options={qualificationOptions}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-white">Subjects:</label>
            <Dropdown
              id="subjects"
              value={userData.Subject}
              onChange={(tempVar) => handleInputChange(tempVar, "Subject")}
              options={subjectOptions}
            />
          </div>
          <div>
            <label className="text-white">Age (optional):</label>
            <TextInput
              type="number"
              id="age"
              onChange={(tempVar) => handleInputChange(tempVar, "age")}
            />
          </div>
          <Link
            to="/quiz"
            onClick={addSubject}
            className="inline-flex items-center px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <p className="flex m-auto">Submit</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
