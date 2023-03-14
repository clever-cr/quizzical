import { nanoid } from "nanoid";

const Question = ({ q, handleClickAnswer }) => {
  let answers = q.answers;

  const handleClick = (answer) => {
    console.log("check");
    if (q.checked) {
      return;
    }
    handleClickAnswer(q.id, answer);
  };

  const answersElement = answers.map((answer) => {
    let id = null;
    if (q.checked) {
      if (q.correct === answer) {
        id = "correct";
      } else if (q.selected === answer) {
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
          answer === q.selected ? "answer selected bg-red-700" : "answer"
        }`}
        onClick={() => handleClick(answer)}
      >
        {atob(answer)}
      </button>
    );
  });

  return (
    <div className="question-container pt-5">
      <h3 className="question-title text-xl font-bold">{atob(q.question)}</h3>
      <div className=" space-x-2 py-5 ">{answersElement}</div>
      <div className="line"></div>
    </div>
  );
};
export default Question;
