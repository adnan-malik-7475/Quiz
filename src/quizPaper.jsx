import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProgrammingQuestion } from "./Questions";
import Button from './InputComponent';
import Result from "./result";

function QuizPaper() {
  const selectedSubject = useSelector((state) => state.questions);

  const [currentQuestions, setCurrentQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState();

  const [currentQuestionIdx, setcurrentQuestionIdx] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [trueAnswers, setTrueAnswers] = useState(0);
  const isSubjectSelected=selectedSubject>0
  useEffect(() => {

    setCurrentQuestions(
      ProgrammingQuestion.filter((sub) => sub.subject === selectedSubject).flatMap((sub) => sub.questions)
    );
  }, [selectedSubject]);

  useEffect(() => {
    if (currentQuestions.length > 0) {
      setCurrentQuestion(currentQuestions[currentQuestionIdx]);
    }
  }, [currentQuestionIdx, currentQuestions]);

  const handleClick = (selectedOption) => {
    
    const currentAnswer = currentQuestion.answer;

    if(selectedOption === currentAnswer){
      setTrueAnswers(trueAnswers + 1);
    }

    if(currentQuestionIdx < currentQuestions.length - 1){
      setcurrentQuestionIdx(currentQuestionIdx + 1);
    }
    

    else{
      setShowResult(true);
    }
  };

  const tryAgain = ()=>{
    setcurrentQuestionIdx(0);
    setTrueAnswers(0);
    setShowResult(false);
  };

  return (
    <div className="h-screen bg-cyan-600 flex items-center justify-center">
      <div className="h-64 bg-[#091d31] w-[600px] m-auto rounded-xl flex flex-row justify-between shadow-2xl">
        { 
          showResult ? (
            <Result answer={trueAnswers} tryAgain={tryAgain} />
          ) : (
            <>
              <div className="text-white">
                <h1 className="ml-4 text-4xl mt-4">
                  Question No {currentQuestionIdx + 1}/{currentQuestions.length}
                </h1>
                {currentQuestion && (
                  <p className="text-xl ml-4 mt-6">{currentQuestion.question}</p>
                )}
              </div>
              <div>
                {currentQuestion && currentQuestion.options ? (
                  currentQuestion.options.map((item, index) => (
                    <Button
                      key={index}
                      text={item}
                      onClick={() => handleClick(item)}
                    />
                  ))
                ) : null}
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

export default QuizPaper;
