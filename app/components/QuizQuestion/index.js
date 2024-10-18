import { submitfuc } from '@/reduxToolkit/Reducer/feature/Reducer';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function QuizQuestion() {
  const questions = useSelector((state) => state.questions.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialSelectedOption = {};
  for (let i = 0; i < questions.length; i++) {
    initialSelectedOption[i] = null;
  }

  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
  const [currentQueInd, setCurrentQueInd] = useState(0);

  const handleOnopting = (qindex, option) => {
    setSelectedOption((preSelect) => {
      if (preSelect[qindex] == option) {
        return { ...preSelect, [qindex]: null };
      } else {
        return { ...preSelect, [qindex]: option };
      }
    });
  };
  const handleNext = () => {
    setCurrentQueInd((preindex) => preindex + 1);
  };
  const handlepreques = () => {
    setCurrentQueInd((preindex) => preindex - 1);
  };
  const handleOnSubmit = () => {
    dispatch(submitfuc(selectedOption));
    navigate('/result');
  };
  return (
    <div className="w-full  my-10">
      <div className="w-[90%] mx-auto p-4 flex flex-col  justify-center testbg shadow-lg shadow-zinc-500 ">
        {currentQueInd < questions.length ? (
          <div
            key={currentQueInd}
            className="  font-Ubuntu font-medium text-24 text-gray-700 p-1"
          >
            <h3 className="p-1">
              {' '}
              QNo.{currentQueInd + 1}:{questions[currentQueInd].question}
            </h3>

            <ul>
              {questions[currentQueInd].options.map((option, optIndex) => (
                <li key={optIndex} className="p-1 text-18">
                  <label className="p-2">
                    <input
                      type="checkbox"
                      name={`question-${currentQueInd}`}
                      value={option}
                      checked={selectedOption[currentQueInd] === option}
                      onChange={() => {
                        handleOnopting(currentQueInd, option);
                      }}
                      required
                    />
                  </label>
                  {option}
                </li>
              ))}
              <div className="flex justify-between items-center text-14 p-6 ">
                <button
                  onClick={() => handlepreques()}
                  disabled={currentQueInd === 0}
                  className="border-2 w-auto p-2 rounded-md hover:bg-red-400 text-white  bg-red-500"
                >
                  Prev
                </button>
                <button
                  onClick={() => handleNext()}
                  disabled={currentQueInd === questions.length - 1}
                  className="border-2 w-auto p-2 rounded-md text-white text-center hover:bg-green-400 bg-green-700"
                >
                  Next
                </button>
              </div>
            </ul>
          </div>
        ) : null}
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleOnSubmit()}
            className="border-2 w-[10%] p-2 rounded-md text-14 text-white hover:bg-blue-300 bg-blue-500"
          >
            {' '}
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;
