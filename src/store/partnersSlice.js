import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partnerData: null, // Stores { orgName, contactPerson, email, phone, partnerType, message }
  isModalOpen: false, // Controls the success popup
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    // Action to save the partnership form data
    setPartnerData: (state, action) => {
      state.partnerData = action.payload;
    },
    // Action to open the success modal
    openPartnerSuccessModal: (state) => {
      state.isModalOpen = true;
    },
    // Action to close the success modal
    closePartnerSuccessModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const {
  setPartnerData,
  openPartnerSuccessModal,
  closePartnerSuccessModal,
} = partnersSlice.actions;
export default partnersSlice.reducer;
