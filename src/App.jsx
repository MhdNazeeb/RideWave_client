
import {BrowserRouter as Router,Route,Routes, } from 'react-router-dom'
import UserRoutes from './routes/user/UserRoutes'
function App() {

  return (
    <>
    <Router>
    <Routes>
      {/* <Route path='/driver' element={<UserRoutes />} />
      <Route path='/admin' element={<UserRoutes />} /> */}
      <Route path='/*' element={<UserRoutes />} />
    </Routes>
    </Router>
       
    </>
  )
}

export default App
