import {React, useState} from 'react'
import {Message} from '../messager/Message';
import './main.css'

export const INITIAL_MESSAGES = [
  {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', isCurrentUser: true},
  {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', isCurrentUser: false},
  {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', isCurrentUser: true}
];

export function Main () {
  const [messages, setMessages]=useState(INITIAL_MESSAGES)


  return (
    <div className='main'>
      {messages.map(({text, isCurrentUser},i) =>(
        <Message key={i} text={text} isCurrentUser={isCurrentUser}/>
      ))}
    </div>
  )
}
