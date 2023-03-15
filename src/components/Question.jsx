import { nanoid } from "nanoid";

const Question = ({ receivedQuestion, handleClickAnswer }) => {
  const answers = receivedQuestion.answers;

  const handleClick = (answer) => {
    console.log("check");
    if (receivedQuestion.checked) {
      return;
    }
    handleClickAnswer(receivedQuestion.id, answer);
  };

  const answersElement = answers.map((answer) => {
    let id = null;
    if (receivedQuestion.checked) {
      if (receivedQuestion.correct === answer) {
        id = "correct";
      } else if (receivedQuestion.selected === answer) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }
    return (
      <button
        key={nanoid()}
        id={id}
        className={` border-2 rounded-lg p-2  ${
          answer === receivedQuestion.selected
            ? "answer selected bg-red-700"
            : "answer"
        }`}
        onClick={() => handleClick(answer)}
      >
        {atob(answer)}
      </button>
    );
  });

  return (
    <div className="question-container pt-5">
      <h3 className="question-title text-xl font-bold">
        {atob(receivedQuestion.question)}
      </h3>
      <div className=" space-x-2 py-5 ">{answersElement}</div>
      <div className="line"></div>
    </div>
  );
};
export default Question;
