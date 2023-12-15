import React, { useState } from "react";
import { Button } from "./InputComponent";
import { ProgrammingQuestion } from "./Questions";
import Result from "./result";

function QuizPaper() {
  const [currentQuestion, setCurrentQuestion] = useState(
    ProgrammingQuestion[0].questions[0]
  );

  const [currentSubIdx, setcurrentSubIdx] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [showResult, setShowResult] = useState(false);
  const [trueAnswers, setTrueAnswers] = useState(0);

  const handleClick = (selectedOption) => {

    const currentAnswer = currentQuestion.answer;

    if (selectedOption === currentAnswer) {

      setTrueAnswers(trueAnswers + 1);
    }

    if (
      currentQuestionIndex <
      ProgrammingQuestion[currentSubIdx].questions.length - 1
    ) {
      setCurrentQuestion(
        ProgrammingQuestion[currentSubIdx].questions[currentQuestionIndex + 1]
      );
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSubIdx < ProgrammingQuestion.length - 1) {
      setcurrentSubIdx(currentSubIdx + 1);
      setCurrentQuestion(ProgrammingQuestion[currentSubIdx + 1].questions[0]);
      setCurrentQuestionIndex(0);
    } else {
      setShowResult(true);
    }
  };

  const tryAgain = () => {
    setCurrentQuestionIndex(0);
    setCurrentQuestion(ProgrammingQuestion[0].questions[0]);
    setTrueAnswers(0);
    setShowResult(false);

    setcurrentSubIdx(0);};

  return (
    <div className="h-screen bg-cyan-600 flex items-center justify-center">
      <div className="h-64 bg-[#091d31] w-[600px] m-auto rounded-xl flex flex-row justify-between shadow-2xl">
        {showResult ? (
          <Result answer={trueAnswers} tryAgain={tryAgain} />
        ) : (
          <>
            <div className="text-white">
              <h1 className="ml-4 text-4xl mt-4">
                Question No {currentQuestionIndex + 1}
                <span className="text-[20px]">
                  /{ProgrammingQuestion[currentSubIdx].questions.length}
                </span>
              </h1>
              <p className="text-xl ml-4 mt-6">{currentQuestion.question}</p>
            </div>
            <div>
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
  );
}

export default QuizPaper;
