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
  const [currentMessage, setCurrentMessage] =useState('')
  
  const onTextAreaChange = ({target:{value}})=>{
    setCurrentMessage(value)
  }

  return (
    <div className='main'>
      <div className='main__messeges'>
        {messages.map(({text, isCurrentUser},i) =>(
          <Message key={i} text={text} isCurrentUser={isCurrentUser}/>
        ))}
      </div>
      <div className='main__plate'>
        <textarea className='main__textarea' 
          onChange={onTextAreaChange} 
          value={currentMessage}></textarea>
      </div>
      <div className='main__plate'> 
        <button className='main__button'>Send message</button>
      </div>
    </div>
  )
}
