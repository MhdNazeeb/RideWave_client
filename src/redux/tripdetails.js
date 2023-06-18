import { createSlice } from '@reduxjs/toolkit';

const tripDetails = createSlice({
    name: 'trip',
    initialState: {
        pickup: "",
        dropoff: "",
        driver: "",
        distance: "",
        date:"",
        time:"" ,
        carDetails:{},
        
        
    },
    reducers: {
       addTrip :(state,action)=>{
          state.trip = action.payload
       },
       confirm :(state,action)=>{
        state.trip.date = action.payload.date
        state.trip.time = action.payload.time
     },
       cleanup:(state,action)=>{
        state.trip = {
            pickup: "",
            dropoff:"",
            driver: "",
            distance: "",
            date:"",
            time:"" 
        }
       }
       
    }
})

export const { addTrip, cleanup } = tripDetails.actions;
export default tripDetails.reducer;
