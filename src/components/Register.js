import React from 'react'
import { useState,useEffect } from 'react';

import "./Style.css"


 
 

 function Register() {
   const initialValues = {username:"", userid:""
     ,email:"", password:"",pass2:""};
    const [formValues,setformvalues] = useState(initialValues);
    const [formErrors,setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
   

    const handleChange = (e)=>{
      const {name, value} =e.target;
      setformvalues({...formValues, [name]:value})
      
    };
   
    const handleSubmit = (e)=>{
      e.preventDefault();
      setformErrors(validate(formValues));
      setIsSubmit(true);
    };
    

    useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues)
      }
    },[formErrors])
    const validate=(Values)=>{
     const errors ={};
     const regex="s^+@[a-zA-Z_]+?[a-zA-Z]{2,3}$/i"; 
     if(!Values.username){
      errors.username="username is required!"
     }
     if(!Values.userid){
      errors.userid="Id is required!"
     }
     if(!Values.email){
      errors.email="email is required!"
     }
     
     
     if(!Values.password){
      errors.password="password is required!"
     }
     if(!Values.pass2){
      errors.pass2="password is required!"
     }
     else if(Values.password !== Values.pass2){
      errors.pass2="passwords must match!"
     }
     return errors
    }

    return (
     
      <div className='register'>
      
      <h1>Create Account</h1>
      {Object.keys(formErrors).length === 0 && isSubmit ? 
        (<div className="messege">succesiffully signed in</div>):(
        <pre>{JSON.stringify(formValues,undefined,2)} </pre>)}

        <form className='form2' onSubmit={handleSubmit} >
        
        <label htmlFor ="userName">UserName</label>
        <input 
          type= "userName" 
          name='username'
          value={formValues.username}
          onChange={handleChange}
        ></input><p>{formErrors.username}</p>
        
        
        <label htmlFor ="id">User Id</label>
        <input 
         type= "text" 
         name='userid'
         value={formValues.userid}
         onChange={handleChange}
        ></input> <p>{formErrors.userid}</p>
        
        
        <label htmlFor ="Email">Email</label>
        <input 
          type= "Email" 
          name='email'
          value={formValues.email}
          onChange={handleChange}
        ></input><p>{formErrors.email}</p>
        
        
        <label htmlFor ="password">password</label>
        <input 
          type= "password"
          name='password'
          value={formValues.password}
          onChange={handleChange}
         ></input><p>{formErrors.password}</p>
        
         
        <label htmlFor ="password">Confirm password</label>
        <input 
          type= "password" 
          name='pass2'
          value={formValues.pass2}
          onChange={handleChange}
        ></input><p>{formErrors.pass2}</p>
        
        
        <button  className='button2'  >Register</button>
        </form>
        </div>
        
     
      
    )
  }
export default Register;
