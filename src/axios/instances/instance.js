import axios from 'axios'

export const axiosClientInstance = axios.create({ baseURL: 'http://localhost:5000' });
export const axiosDriverInstance = axios.create({ baseURL: 'http://localhost:5000/driver/' });
export const axiosAdminInstance = axios.create({ baseURL: 'http://localhost:5000/admin/' });