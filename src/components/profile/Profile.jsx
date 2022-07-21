import React from 'react'
import './profile.css'

export function Profile () {
  return (
    <div className='profile__plate'>
      <div className='profile__avatar'>
        <img 
          className='profile__image' 
          src="" 
          alt="" 
        />
      </div>
      <div className='profile__bubble'>Name: </div>
      <div className='profile__bubble'>Email: </div>
    </div>
  )
}
