"use client";


import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {
  const [formData, setFormData]= useState({});
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlechange = (e) => {
   setFormData({...formData, [e.target.id]: e.target.value.trim() })
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password){
      return setErrorMessage('please fill out all fields.')
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch ('/api/auth/signup', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (data.success == false){
        return setErrorMessage ('user or email already exits');
      }
      setLoading(false);
      if (res.ok){
        navigate ('/signin')
      }

    } catch (error){
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
    
    
  

  return (
    // Overall container
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center items-center p-3 max-w-3xl mx-auto">

        {/* left side */}
        <div className="flex-1 flex flex-col justify-center ">
          <Link href="/" className='whitespace-nowrap text-4xl  font-semibold dark:text-white self-center'>
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-2 text-white rounded-lg'>Atibyan</span> 
          Blog
          </Link>
          <p className="text-xl mt-4 md:text-2xl text-center md:text-left">Atibyan Blog connects you to stories, ideas, and insights that enrich your journey.</p>
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
            <div className="">
              <Label htmlFor="username" value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" onChange={handlechange} />
            </div>
            <div>
              <Label htmlFor="username" value="E-mail" />
              <TextInput type="email" placeholder="Email@gmail.com" id="email" onChange={handlechange} />
            </div>
            <div>
              <Label htmlFor="username" value="Enter Password" />
              <TextInput type="password" placeholder="password" id="password" onChange={handlechange} />
            </div>
            <Button gradientDuoTone='purpleToPink'  type="submit" disabled= {loading}>
              {
                loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">loading...</span>
                  </>
                )
              
              
             : 'Sign Up'}</Button>
          </form>

          <div className="mt-5">
            <Button gradientDuoTone='purpleToPink' outline type="submit" className="w-full">Continue With Google</Button>
          </div>

          {/* sign in shinanigans */}
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account?</span>
            <Link to='/signin' className="text-blue-500"> Sign In</Link>

          </div>
    {
      errorMessage && (
        <Alert className= "mt-5" color="failure">

          {errorMessage}
        </Alert>
      )
    }
        </div>
      </div>

    </div>
  )
}