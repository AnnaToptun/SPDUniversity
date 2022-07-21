import React from 'react'
import {ChatContextProvider} from '../Context/ChatContextProvider'
import './app.css'
import {Header} from './header/Header'
import {LoginChat} from './login/LoginChat'
import {Main} from './main/main/Main'
import {Profile} from './profile/Profile'
import {RegisterChat} from './register/RegisterChat'
export function App () {
  return (
    <div className='app'>
      <ChatContextProvider>
        <Header/>
        <Main/>
      </ChatContextProvider>
    </div>
  )
}
