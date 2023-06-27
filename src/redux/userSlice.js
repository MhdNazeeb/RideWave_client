import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
       token : '',
       user : null
    },
    reducers: {
        ClientLogin: (state, action) => {
            state.user = action.payload;
            
        },
        clientLogout:(state, action) => {
            state.user = {
                token :'',
                user : null
            }
        }
    }
})

export const { ClientLogin, clientLogout } = userSlice.actions;
export default userSlice.reducer;
