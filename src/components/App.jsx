import React from 'react'
import './app.css'
import {Header} from './header/Header'
import {Main} from './main/main/Main'
export function App () {
  return (
    <div className='app'>
      <Header/>
      <Main/>
    </div>
  )
}
