import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Dashboard, Signin, Signup, SendMoney, ErrorPage} from './pages/index.js'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/send' element={<SendMoney />}></Route>
        <Route path='/error' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
