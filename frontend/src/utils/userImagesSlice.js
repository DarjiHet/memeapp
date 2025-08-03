import { createSlice } from "@reduxjs/toolkit";

const userImageSlice = createSlice({
  name: "userimages",
  initialState: {
    images: [],
    count: 0,
  },
  reducers: {
    loadUserImages: (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    },
    deleteUserImage: (state, action) => {
      const idToDelete = action.payload;
      state.images = state.images.filter((img) => img._id !== idToDelete);
      state.count -= 1;
    },
  },
});

export const { loadUserImages, deleteUserImage } = userImageSlice.actions;
export default userImageSlice.reducer;
