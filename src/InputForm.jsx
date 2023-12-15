import { React, useState } from "react";
import { Link } from "react-router-dom";

function InputForm() {
  const [userData, setUserData] = useState(10000);

  const handleSubmit = (event) => {
    console.log(userData);
  };

  return (
    <div className="w-96 m-auto">
      <div class="flex flex-col   gap-4 border rounded-md p-4 bg-gray-100">
        <h2 class="text-lg font-semibold text-gray-700">
          Tell us about yourself!
        </h2>
        <div class="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            id="name"
            class="px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">City:</label>
          <input
            type="text"
            id="city"
            class="px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            Qualifications
          </label>
          <select
            id="qualification"
            class="px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Degree</option>
            <option>Intermediate</option>
            <option>Bachelor's of Sciences</option>
            <option>Master's of Sciences</option>
            <option>Ph.D</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Subjects</label>
          <select
            id="qualification"
            class="px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Subject</option>
            <option>Math</option>
            <option>Physics</option>
            <option>Programming Fundamentals</option>
            <option>Computer</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            Age (optional):
          </label>
          <input
            type="number"
            id="age"
            class="px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
  );
}
export default InputForm;
