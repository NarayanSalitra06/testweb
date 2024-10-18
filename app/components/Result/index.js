import React from 'react';
import { useSelector } from 'react-redux';

function Result() {
  const submitedres = useSelector((state) => state.questions.sumbitedData);
  const questions = useSelector((state) => state.questions.value);
  const formdata = useSelector((state) => state.questions.formData);
  console.log(formdata, 'formdata');

  let count = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].correctAnswer == submitedres[i]) {
      console.log(questions[i].correctAnswer, 'currectans');
      count += 1;
    }
  }
  let percentage = (count / questions.length) * 100;
  let expression = '';
  console.log(expression, 'out');
  console.log(count, 'outside if');
  if (percentage < 50) {
    expression = 'Improve your skills';
  } else if (percentage >= 50 && percentage < 60) {
    expression = 'Bad';
  } else if (percentage >= 60 && percentage < 70) {
    expression = 'Good';
  } else if (percentage >= 70 && percentage < 80) {
    expression = 'Very Good';
  } else if (percentage >= 80 && percentage < 90) {
    expression = 'Perfect';
  } else if (percentage >= 90 && percentage <= 100) {
    expression = 'Excellent';
  }

  return (
    <div className=" h-full w-full md:p-28 ">
      <div className="flex flex-col justify-center items-center md:w-[70%] w-[100%]  text-white  rounded-2xl  shadow-md resultbg p-4 shadow-slate-700 mx-auto ">
        <div className="w-[70%]  flex justify-center items-center font-Ubuntu font-bold text-24 ">
          {expression}
        </div>
        <div className="flex flex-col justify-center items-center w-[70%] mx-auto font-Ubuntu font-bold text-center md:text-left  text-18">
          <h1>your score </h1>
          <div className=" h-[30vh] w-[30vh] rounded-[200px] flex justify-center items-center  resultcirclebg">
            <h1 className=" md:text-24">{percentage}%</h1>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center  w-[70%]  font-Ubuntu font-bold text-18  p-3">
          <div className="flex flex-col md:flex-row justify-center items-center ">
            {' '}
            <h1>Name:</h1>
            <h1>
              {formdata.firstName} {formdata.lastName}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start ">
            {' '}
            <h1>Username:</h1>
            <h1>{formdata.username}</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start ">
            {' '}
            <h1>Gmail:</h1>
            <h1> {formdata.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
