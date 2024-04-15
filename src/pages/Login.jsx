import React, { useEffect, useState } from 'react'
import './Login.css'
import { emailValidator,passwordValidator } from '../components/RegexValidator';

const Login = () => {
  const [input,setInput] = useState({email:'',password:''})

   const [successMessage,setSuccessMessage] = useState('');
   const [errorMessage,setErrorMessage] = useState('');
  
   useEffect( () => {
    if(localStorage.getItem('auth')) 
      window.location.href = '/dashboard';
  },[])

   const handleChange = (e) => {
    setInput({...input,[e.target.name]: e.target.value});
   }
   
   const handleSubmit = (e) => {
   
    e.preventDefault();
    console.log(input.email);
    console.log(input.password);
    
    setSuccessMessage('');
    setErrorMessage('');
    if(input.email != "admin@gmail.com"){
      return setErrorMessage('User Not Found !');
    }
    if(input.password != 1234){
      return setErrorMessage('Password incorrect');
    }    
    localStorage.setItem('auth',true);
    window.location.href = '/dashboard';
   };
  function gotoSignup(){
    window.location.href = '/signup'
  }
  return (
    <>
        <div className='container1'>
             <h2 className='c-login'>LogIn</h2>
             {
              errorMessage.length>0 && <div style={{marginBottom:"10px",color:"red"}}>{errorMessage}</div>
             }
             {
              successMessage.length>0 && <div style={{marginBottom:"10px",color:"green"}}>{successMessage}</div>
             }
             <form onSubmit={handleSubmit}>
                <b>E-mail :</b><input className='cinput' id='email' name='email' placeholder='example@gmail.com'onChange={handleChange}></input><br/>
                <b>Password  :</b><input className='cinput' name='password' type='text' onChange={handleChange} ></input><br/>
                <button className='cbtn'><b>Login</b></button>
             </form>
             <p className='signup-btn'>I don't have an account</p> <button id='signup' onClick={gotoSignup}>sign up</button>
        </div>
    </>
  )
}

export default Login