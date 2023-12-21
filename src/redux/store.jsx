import { configureStore } from '@reduxjs/toolkit';
import SetselectedSubject from './slice'

const store = configureStore({
  reducer: {
    questions: SetselectedSubject, 
  },
});

export default store;