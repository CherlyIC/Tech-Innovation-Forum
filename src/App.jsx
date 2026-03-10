import React from 'react'
import {useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'

function App () {
  const [form, setForm] = useState({

    firstName: "",
    lastName: "",
    email:"",
    phone:"",
    ticketType:""
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
          isRegistered ? <Navigate to="/my-registration"/> : <RegisterPage FormData={formData} setFormData={setFormData}/>
         } 
        />
        <Route path="/review" element={<ReviewPage formData={formData}/>}/>
        <Route path="/confirmation" element={
          <ConfirmationPage formData= {formData} setIsRegistered={setIsRegistered} />
        } />

        <Route path="/my-registration" element={
          <MyRegistrationPage formData={formData} setFormData={setFormData} setIsRegistered={setIsRegistered}/>
        }/>

      </Routes>
        
    </BrowserRouter>
  )
}

export default App