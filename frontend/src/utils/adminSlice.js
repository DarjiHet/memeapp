import { createSlice } from "@reduxjs/toolkit"


// adminSlice.js
const adminSlice = createSlice({
    name: 'admin',
    initialState: [], // ✅ set empty array, not null
    reducers: {
        loadUsers: (state, action) => {
            return action.payload;
        },
    },
});



export const { loadUsers } = adminSlice.actions;
export default adminSlice.reducer;