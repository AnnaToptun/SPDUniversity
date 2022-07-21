import {React, useContext, useEffect, useState} from 'react'
import {INITIAL_MESSAGES} from '../constants';
import {Message} from '../messager/Message';
import {getRandomMessage} from '../utils/getRandomMessage';
import './main.css'
import { db } from '../../../serveses/firebase-config';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, orderBy, limit} from 'firebase/firestore'
import {ChatContext} from '../../../Context/ChatContextProvider';

export function Main () {
  const {messagesReply, setMessagesReply,  replyBot, addBotMassege} = useContext(ChatContext)
  const [messages, setMessages]=useState(INITIAL_MESSAGES)
  const [currentMessage, setCurrentMessage] =useState('')
  
  const arrayReplayBot = collection( db, 'Reply')
  
  const onTextAreaChange = ({target:{value}})=>{
    setCurrentMessage(value)
  }
  
  const onMessageReply = () =>{
    setTimeout(()=>(
      setMessages(prevState => ([...prevState, getRandomMessage(messagesReply)]))
    ), 1000)
  }

  const onButtonClick = () =>{
    if(currentMessage.trim()) {
      setMessages([...messages, {text: currentMessage, isCurrentUser: true}])
      setCurrentMessage('')
      onMessageReply()
    }
  }
  return (
    <div className='main'>
      <div className='main__messages'>
        {messages.map(({text, isCurrentUser},i) =>(
          <Message 
            key={i} 
            text={text} 
            isCurrentUser={isCurrentUser}/>
        ))}
      </div>
      <div className='main__plate'>
        <textarea className='main__textarea' 
          onChange={onTextAreaChange} 
          value={currentMessage}>
        </textarea>
      </div>
      <div className='main__plate'> 
        <button 
          className='main__button'
          onClick={onButtonClick}
        >Send message</button>
      </div>
    </div>
  )
}
