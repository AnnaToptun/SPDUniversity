import React, {useState} from 'react'
import './registerChat.css'
export function RegisterChat () {
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    name: '',
    img: ''
  })

  const onUserLogin = (email)=>{
    setRegisterForm({...registerForm, email: email})
  }

  const onUserPassword = (password)=>{
    setRegisterForm({...registerForm, password: password})
  }

  const onUserName = (name)=>{
    setRegisterForm({...registerForm, name: name})
  }

  const onUserImg = (img)=>{
    setRegisterForm({...registerForm, img: img})
  }

  const onSignUp = (e)=>{
    e.preventDefault();
    console.log(registerForm)    
  }

  return (
    <form className='register__plate'>      
      <input 
        value={registerForm.name} 
        className='register__input' 
        type="text" 
        onChange={e => onUserName(e.target.value)}/>
      <input 
        value={registerForm.img} 
        className='register__input' 
        type="text" 
        onChange={e => onUserImg(e.target.value)}/>
      <input 
        value={registerForm.email} 
        className='register__input' 
        type="email" 
        onChange={e => onUserLogin(e.target.value)}/>
      <input 
        value={registerForm.password} 
        className='register__input' 
        type="password" 
        onChange={e => onUserPassword(e.target.value)}/>
      <button className='register__button' onClick={e => onSignUp(e)}>Sign up</button>
      <button className='register__button' onClick={e => onSignUp(e)}>Sign in</button>
    </form>
  )
}

