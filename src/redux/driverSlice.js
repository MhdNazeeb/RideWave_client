import { createSlice } from '@reduxjs/toolkit';

const driverSlice = createSlice({
    name: 'driver',
    initialState: {
       token : '',
       driver : null
    },
    reducers: {
        driverLoginRedux: (state, action) => {
            state.driver = action.payload;
        },
        driverLogout:(state, action) => {
            state.driver = {
                token : '',
                driver : null
            }
        }
    }
})

export const { driverLoginRedux, driverLogout } = driverSlice.actions;
export default driverSlice.reducer;
