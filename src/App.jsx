import React, { useState } from "react";
import { Button } from "./InputComponent";
import { ProgrammingQuestion } from "./Questions";
import Result from "./result";
function App() {
  const [currentQuestion, setcurrentQuestion] = useState(
    ProgrammingQuestion[0]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, showResult] = useState(false);
  const [trueAnswers, setTrueAnswers] = useState(0);
  const handleClick = (item) => {
    if (ProgrammingQuestion[currentIndex].answer == item) {
      setTrueAnswers(trueAnswers + 1);
    }
    if (currentIndex < ProgrammingQuestion.length - 1) {
      setcurrentQuestion(ProgrammingQuestion[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
      console.log(item);
    } else {
      showResult(true);
    }
  };
  const tryAgain = () => {
    setCurrentIndex(0);
    setcurrentQuestion(ProgrammingQuestion[0]);
    setTrueAnswers(0);
    showResult(false);
  };

  return (
    <>
      <div className=" h-screen bg-cyan-600   flex items-center justify-center">
        <div className="h-64  bg-[#091d31] w-[600px] m-auto rounded-xl flex flex-row justify-between shadow-2xl  ">
          {result ? (
            <Result answer={trueAnswers} tryAgain={tryAgain} />
          ) : (
            <>
              <div className="text-white">
                <h1 className=" ml-4 text-4xl mt-4">
                  Question No {currentIndex + 1}{" "}
                </h1>
                <p className="text-xl ml-4 mt-6">{currentQuestion.question}</p>
              </div>
              <div className="  ">
                {currentQuestion.options.map((item, index) => (
                  <Button
                    key={index}
                    text={item}
                    onClick={() => handleClick(item)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
