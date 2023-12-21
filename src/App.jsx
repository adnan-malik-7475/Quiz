import React, { useState } from "react";
import InputForm from "./InputForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizPaper from "./quizPaper";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <InputForm />,
  },
  {
    path: "quiz",
    element: < QuizPaper/>,
  },
]);
function App() {
  return (
     <div>
        <RouterProvider router={router}></RouterProvider>
      </div>

     
  );
}

export default App;
