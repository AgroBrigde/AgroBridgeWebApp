import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null, // Stores { fullName, phoneNumber, email, role, location }
  isModalOpen: false, // Controls the success popup
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to save the form data to the store
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    // Action to open the success modal
    openSuccessModal: (state) => {
      state.isModalOpen = true;
    },
    // Action to close the success modal
    closeSuccessModal: (state) => {
      state.isModalOpen = false;
    },
    // Optional: clear data
    clearUserData: (state) => {
      state.userData = null;
      state.isModalOpen = false;
    },
  },
});

export const {
  setUserData,
  openSuccessModal,
  closeSuccessModal,
  clearUserData,
} = userSlice.actions;
export default userSlice.reducer;
