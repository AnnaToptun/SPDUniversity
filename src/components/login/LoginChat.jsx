import React, {useState} from 'react'
import './login.css'
export function LoginChat () {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const onUserLogin = (email)=>{
    setLoginForm({...loginForm, email: email})
  }

  const onUserPassword = (password)=>{
    setLoginForm({...loginForm, password: password})
  }

  const onSignIn = (e)=>{
    e.preventDefault();
    console.log(loginForm)    
  }

  return (
    <form className='login__plate'>
      <input 
        value={loginForm.email} 
        className='login__input' 
        type="email" 
        required="true"
        onChange={e => onUserLogin(e.target.value)}/>
      <input 
        value={loginForm.password} 
        className='login__input' 
        type="password" 
        required="true"
        onChange={e => onUserPassword(e.target.value)}/>
      <button className='login__button' onClick={e => onSignIn(e)}>Sign in</button>
      <button className='login__button'>Sign up</button>
    </form>
  )
}
