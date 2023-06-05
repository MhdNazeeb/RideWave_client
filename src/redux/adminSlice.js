import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
       token : '',
       admin : null
    },
    reducers: {
        adminLoginRedux: (state, action) => {
            state.admin = action.payload;
        },
        adminLogout:(state, action) => {
            state.admin = {
                token : '',
                admin : null
            }
        }
    }
})

export const { adminLoginRedux, adminLogout } = adminSlice.actions;
export default adminSlice.reducer;
