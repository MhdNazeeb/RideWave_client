import axios from 'axios'

export const axiosClientInstance = axios.create({ baseURL: 'https://ridewave-18px.onrender.com/' });
export const axiosDriverInstance = axios.create({ baseURL: 'https://ridewave-18px.onrender.com/driver/' });
export const axiosAdminInstance = axios.create({ baseURL: 'https://ridewave-18px.onrender.com/admin/' }); 
export const chats = axios.create({ baseURL: 'https://ridewave-18px.onrender.com' }); 
export const message = axios.create({baseURL:'https://ridewave-18px.onrender.com'})