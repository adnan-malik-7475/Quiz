import { ProgrammingQuestion } from "./Questions";
const Result = ({ answer, tryAgain }) => {
  console.log(answer);
  return (
    <div>
      <p className=" h-32 w-[570px] flex items-center ml-8 font-bold text-white text-4xl">
        You Scored
        <span style={{ color: "green" }} className="ml-2 mr-2">
          {answer}
        </span>
        out of
        <span style={{ color: "red" }} className="ml-2 mr-2">
          {ProgrammingQuestion.length}
        </span>
      </p>
      <div className="flex justify-end">
        <button
          onClick={tryAgain}
          className="text-white mt-20 mr-2   h-10 w-[200px] hover:bg-blue-500  rounded-2xl  outline-none focus:outline-none bg-[#091d31] border-[3px] border-cyan-600 text-xl font-light"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
export default Result;
