import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function Question(props) {
//   const [questions, setQuestions] = useState(false);
//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [totalQuestions, setTotalQuestions] = useState(0);
//   const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
//   const [showResults, setShowResults] = useState(false);

// useEffect(() => {
//  setQuestions(props.question);
//  setTotalQuestions(props.question.length);
// }, [])

  // const proceed = (e) => {
  //   e.preventDefault();
  //   setActiveQuestion(activeQuestion + 1);
  // };
  // const back = (e) => {
  //   e.preventDefault();
  //   setActiveQuestion(activeQuestion - 1);
  // };
  // const addAnswers = (formData) => {
  //   const values = {};
  //   let totalValue = 0;
  //   for (var pair of formData.entries()) {
  //     var key = pair[0];
  //     var value = pair[1];

  //     totalValue += parseFloat(value);
  //     if (values[key]) {
  //       if (!(values[key] instanceof Array)) {
  //         values[key] = new Array(values[key]);
  //       }
  //       values[key].push(value);
  //     } else {
  //       values[key] = value;
  //     }
  //   }
  //   setTotalCorrectAnswers(totalValue);
  //   console.log(values);
  // };
  // const submit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   addAnswers(formData);
  //   setShowResults(true);
  // };

  return (
    <>
	{props.question.map((q, i) => (
        <div className="mb-4 p-4" style={{borderRadius:"5px", border:"1px solid #2b2b2b"}}  key={i}>
          <div>
            <h6>Question {i + 1}</h6>
            <p>{q.questionText}</p>
          </div>
          <div>
            <form>
              {q.answerOptions.map((a) => (
                <div>
                  <label>
                    <input type="radio" /> {a.answerText}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
      ))} 
    </>
  );
}
