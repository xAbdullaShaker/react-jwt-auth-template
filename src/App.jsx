import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp';
import { BrowserRouter } from 'react-router-dom';
import * as authService from './services/authService';
import { prototypejs } from 'globals';



const App = () => {

  const [user, setUser] = useState(null)

  const handleSignUp = async (formData) => {
   const res = await authService.signUp(formData)
   setUser(res)
  }

    const handleSignOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const handleChange = (evt) => {
   setFormData ({...formData, })
  }

  const handleSubmit = (evt) => {
      evt.preventDefault()
    prototypejs.handleSignIn()
  }

  return (
    <>
      <NavBar user={user} handleSignOut={handleSignOut} />
      <Routes>
          <Route path='/' element={<h1>Hello world!</h1>} />
          <Route path='/sign-up' element={<SignUp handleSignUp={handleSignUp} />} />
          <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App