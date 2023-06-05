
import {BrowserRouter as Router,Route,Routes, } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRoutes from './routes/user/UserRoutes'
import DriverRoutes from './routes/driver/DriverRoutes';
import AdminRoutes from './routes/admin/AdminRoutes';
function App() {
  return (
    <>
    <Router>
      <ToastContainer />
    <Routes>
      <Route path='/driver/*' element={<DriverRoutes />} />
      <Route path='/admin/*' element={<AdminRoutes />} />
      <Route path='/*' element={<UserRoutes />} />
    </Routes>
    </Router>
       
    </>
  )
}

export default App
