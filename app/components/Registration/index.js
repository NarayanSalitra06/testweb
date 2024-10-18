import { formdatas } from '@/reduxToolkit/Reducer/feature/Reducer';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [intitialForm, setInitialForm] = useState({
    firstname: '',
    lastname: '',
    username: '',
    gmail: '',
  });
  const handleOnchange = (e) => {
    const { name, value, type, checked } = e.target;
    setInitialForm({
      ...intitialForm,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const formvalue = {
      firstName: e.target.elements.firstname.value,
      lastName: e.target.elements.lastname.value,
      username: e.target.elements.username.value,
      email: e.target.elements.gmail.value,
    };

    const validationErrors = validation(intitialForm);
    if (Object.keys(validationErrors).length == 0) {
      dispatch(formdatas(formvalue));
      navigate('/QuizQuestion');
    } else {
      setErrors(validationErrors);
    }
  };
  const validation = (formvalue) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formvalue.firstname) {
      errors.firstName = 'First name is required';
    }
    if (!formvalue.lastname) {
      errors.lastName = 'Last name is required';
    }
    if (!formvalue.username) {
      errors.username = 'User name is required';
    } else if (formvalue.username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    }

    if (!formvalue.gmail) {
      errors.gmail = 'gmail is required';
    } else if (!regex.test(formvalue.gmail)) {
      errors.gmail = 'Invalid email format';
    }
    return errors;
  };

  return (
    <div className="w-full ">
      <div className="sm:w-[70%] m-[5%]  rounded-md shadow-md border-2 border-gray-100 shadow-slate-100 p-1 mx-auto regformbg">
        <div className="flex justify-center items-center   regbg w-[60%] h-[60px] mx-auto text-22 rounded-t-md text-white font-bold font-Ubuntu  text-center]">
          <h1 className=" font-Ubuntu p-1">
            Register Yourself For An Exciting Quiz
          </h1>
        </div>
        <div className="my-1  flex flex-col  justify-center items-center w-[60%]  mx-auto rounded-b-md     checkoutbg">
          <div className="flex flex-col justify-center items-center py-3  my-3 border-[#698FC4] border-2 rounded-md text-[#698FC4] font-bold font-Ubuntu text-22 text-center w-[50%]">
            <h1>Enter Your Detail</h1>
          </div>
          <div className="w-[60%] h-[70% ]">
            <form
              onSubmit={(e) => handleOnsubmit(e)}
              className="flex flex-col justify-center items-center text-[#698FC4] font-josefin font-medium"
            >
              <div className="flex flex-col w-[100%] md:w-[70%]">
                <label className="font-Ubuntu"> FirstName</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name is required"
                  className="border-1 border-gray-700  text-black font-josefin font-extralight  rounded-lg p-2"
                  onChange={handleOnchange}
                />{' '}
                <p className="text-red-500">{errors.firstName}</p>
              </div>

              <div className="flex flex-col w-[100%] md:w-[70%]">
                {' '}
                <label className="font-Ubuntu"> LastName</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name is required"
                  className="border-1 border-gray-700 text-black font-josefin font-extralight  rounded-lg p-2"
                  onChange={handleOnchange}
                ></input>
                <p className="text-red-500">{errors.lastName}</p>
              </div>
              <div className="flex flex-col w-[100%] md:w-[70%]">
                <label className="font-Ubuntu"> UserName</label>
                <input
                  type="text"
                  name="username"
                  placeholder="User Name is required"
                  className="border-1 border-gray-700 text-black font-josefin font-extralight  rounded-lg p-2"
                  onChange={handleOnchange}
                ></input>
                <p className="text-red-500">{errors.username}</p>
              </div>
              <div className="flex flex-col w-[100%] md:w-[70%]">
                {' '}
                <label className="font-Ubuntu"> Email</label>
                <input
                  type="gmail"
                  name="gmail"
                  placeholder="Email is required"
                  className="border-1 border-gray-700 text-black font-josefin font-extralight  rounded-lg p-2"
                  onChange={handleOnchange}
                ></input>
                <p className="text-red-500">{errors.gmail}</p>
              </div>
              <button
                type="submit"
                className="mx-auto paybtnbg h-[35px] w-[75px] font-Ubuntu rounded hover:bg-blue-400 text-white font-ubuntu m-3"
              >
                {' '}
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
