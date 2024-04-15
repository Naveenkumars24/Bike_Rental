import React, { useEffect, useState } from 'react'
import './Signup.css'

const Signup = () => {
  const [input,setInput] = useState({email:'',password:''})

   const [successMessage,setSuccessMessage] = useState('');
   const [errorMessage,setErrorMessage] = useState('');
  
  //  useEffect( () => {
  //   if(localStorage.getItem('auth')) 
  //     window.location.href = '/dashboard';
  // },[])

   const handleChange = (e) => {
    setInput({...input,[e.target.name]: e.target.value});
   }
   
   const handleSubmit = (e) => {
   
    e.preventDefault();
    console.log(input.email);
    console.log(input.password);
    
    setSuccessMessage('');
    setErrorMessage('');

    // if(input.email !=  /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/){
    //   return setErrorMessage('Please enter valid email id');
    // }
    
    if(input.email !=  "naveen@gmail.com"){
      return setErrorMessage('Please enter valid email id');
    }
    if(input.email ==  "naveen@gmail.com"){
      setSuccessMessage("Email id is OK")
   }
    // if(input.password != /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/){
    //   return setErrorMessage('Password should have atleast one capital char,Length of password should be atleast 8,atleast one special symbol, atleast one number');
    // }
    if(input.password != 1234){
      return setErrorMessage('Password is incorrect');
      // return setErrorMessage('Password should have atleast one capital char,Length of password should be atleast 8,atleast one special symbol, atleast one number');
    }
    // localStorage.setItem('auth',true);
    window.location.href = '/';
   };
   function gotoLogin()
    {
      window.location.href = './'
    }
  return (
    <>
        <div className='container2  '>
             <h2 className='s-login'>Signup</h2>
             {
              errorMessage.length>0 && <div style={{marginBottom:"10px",color:"red"}}>{errorMessage}</div>
             }
             {
              successMessage.length>0 && <div style={{marginBottom:"10px",color:"green"}}>{successMessage}</div>
             }
             <form onSubmit={handleSubmit}>
                <b>E-mail :</b><input className='sinput' id='email' name='email' placeholder='example@gmail.com'onChange={handleChange}></input><br/>
                <b>Password  :</b><input className='sinput' name='password' type='text' onChange={handleChange} ></input><br/>
                <button className='sbtn'><b>Create account</b></button>
             </form>
             <p className='ca-btn'>I have an account</p> <button id='login' onClick={gotoLogin}>Login</button>
        </div>
    </>
  )
}

export default Signup