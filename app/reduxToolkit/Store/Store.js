import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../Reducer/feature/Reducer';
export const Store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});
