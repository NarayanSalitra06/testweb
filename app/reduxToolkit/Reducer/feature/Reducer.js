import { createSlice } from '@reduxjs/toolkit';
import questionsData from '../../../data/Mydata.json';
const initialState = {
  value: questionsData,
  formData: {},
  sumbitedData: {},
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    questionss: (state) => {
      state;
    },
    formdatas: (state, action) => {
      state.formData = action.payload;
    },
    submitfuc: (state, action) => {
      state.sumbitedData = action.payload;
    },
  },
});

export const { questionss, formdatas, submitfuc } = questionSlice.actions;
export default questionSlice.reducer;
