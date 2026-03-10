import React from 'react'
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar  from './components/Navbar'
import EventInformation from './pages/EventInformation'
import Register from './pages/Register'
import Review from './pages/Review'
import Confirmation from './pages/Confirmation'
import MyRegistration from './pages/MyRegistration'
import SpeakersSection from './components/SpeakersSection'

function App () {
  const [form, setForm] = useState({

    firstName: "",
    lastName: "",
    email:"",
    phone:"",
    ticketType:"Standard"
  })

  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    const save = localStorage.getItem("registration")
    if(save){
      setFormDate(JSON.parse(save))
      setIsRegistered(true)
    }

  }, [])


  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={< EventInformation/>}/>
        <Route path="/register" element={
          isRegistered ? <Navigate to="/my-registration"/> : <Register Form={form} setForm={setForm}/>
         } 
        />
        <Route path="/review" element={<Review form={form}/>}/>
        <Route path="/confirmation" element={
          <Confirmation form= {form} setIsRegistered={setIsRegistered} />
        } />

        <Route path="/my-registration" element={
          <MyRegistration  form={form} setForm={setForm} setIsRegistered={setIsRegistered}/>
        }/>

      </Routes>
        
    </BrowserRouter>
  )
}

export default App