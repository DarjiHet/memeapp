import { createSlice } from "@reduxjs/toolkit"


const imageSlice = createSlice({
    name: 'image',
    initialState: null,
    reducers: {
        loadImages: (state, action) => {
            return action.payload
        },
        searchImage: (state, action) => {
            return action.payload
        }
    }
})


export const { loadImages, searchImage } = imageSlice.actions;
export default imageSlice.reducer;