import { createSlice } from '@reduxjs/toolkit';

const tripDetails = createSlice({
    name: 'trip',
    initialState: {
        pickup: "",
        dropoff: "",
        car: "",
        distance: "",
        date:"",
        time:"" ,
        driver:"",  
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
     location :(state,action)=>{
        state.trip.pickup=action.payload.pickup
        state.trip.dropoff=action.payload.dropOff
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

export const { addTrip, cleanup,location } = tripDetails.actions;
export default tripDetails.reducer;
