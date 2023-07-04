import { createSlice } from '@reduxjs/toolkit';

const rideDetails = createSlice({
    name: 'ride',
    initialState: {
        pickup : "",
        dropoff :"",
        name : "",
        bookingStatus : "",
        id:""
         },

    reducers: {
       confirm :(state,action)=>{
        state.pickup = action.payload.location.pickup
        state.dropoff = action.payload.location.dropoff
        state.name = action.payload.passenger.name
        state.bookingStatus = action.payload.bookingStatus
        state.id = action.payload.id
        

        
     },
       rideCleanup:(state,action)=>{
        state.pickup = ""
        state.dropoff =""
        state.name = ""
        state.bookingStatus = ""
        state.id=""
       }
       
    }
})

export const { confirm, rideCleanup, } = rideDetails.actions;
export default rideDetails.reducer;