import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "questions",
  initialState: "",
  reducers: {
    setSelectedSubject(state, action) {
      return action.payload
    //   state.filteredQuestions = filteredQuestions.filter(
    //     (subject) => subject.subject === action.payload
    //   )?.questions || [];
    //   console.log(state.filteredQuestions)
    },
  },
});

export const { setSelectedSubject } = dataSlice.actions;
export default dataSlice.reducer;
