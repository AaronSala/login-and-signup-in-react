import React, { Component } from 'react'
import "./Style.css";


const Button=document.getElementById("button")
// const user =document.querySelector(".userName")
// //const pass =document.querySelector(".password")
Button.addEventListener('click', validate);
function validate(){
//   if (user.value===""){
//     user.style.border="2px solid red";
  }
// }

export class Login extends Component {
  render() {
    return (
      <div className='login'>
      <h1>Login Here</h1>
        <div className='form'>
        <form >
        <label htmlFor ="userName">UserName</label>
        <input type= "userName"></input>
          <br/>
        <label htmlFor ="password">password</label>
        <input type= "password"></input><br/>
        <button  className='button' >Login</button>
        </form>
        </div>
        <h2>forgot Password?</h2>
        <h3>Dont have account?<span>  create Account</span> </h3>
      </div>
    )
  }
}

export default Login
