import {React, createContext, useState, useEffect} from 'react'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, orderBy, limit} from 'firebase/firestore'
import { db } from '../serveses/firebase-config'

export const ChatContext = createContext()

export function ChatContextProvider ({children}) {
  const [messagesReply, setMessagesReply]=useState([])

  const arrayReplayBot = collection( db, 'Reply')

  const replyBot = async ()=>{    
    const dataReply = await getDocs(arrayReplayBot)
    const allReply = dataReply.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    setMessagesReply(allReply)
  }

  const addBotMassege = async (message)=>{    
    await addDoc(arrayReplayBot, message)
  }
  
  useEffect(()=>{
    replyBot()
  }, [])
  return (
    <ChatContext.Provider value={{
      messagesReply, 
      setMessagesReply,
      replyBot,
      addBotMassege
      }}>
      {children}
    </ChatContext.Provider>
  )
}
