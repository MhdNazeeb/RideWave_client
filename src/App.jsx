
import {BrowserRouter as Router,Route,Routes, } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRoutes from './routes/user/UserRoutes'
import DriverRoutes from './routes/driver/DriverRoutes';
function App() {

  return (
    <>
    <Router>
      <ToastContainer />
    <Routes>
      <Route path='/driver/*' element={<DriverRoutes />} />
      <Route path='/admin' element={<UserRoutes />} />
      <Route path='/*' element={<UserRoutes />} />
    </Routes>
    </Router>
       
    </>
  )
}

export default App
