import React, { useRef,useEffect } from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'

function Messages() {
  const {messages,loading}=useGetMessages();
  const lastMessageRef=useRef();
  console.log(messages);
  useEffect(()=>{
    setTimeout(()=>{
    lastMessageRef.current?.scrollIntroView({behavior:"smooth"});
  },100);
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
    {!loading && messages.length >0 && messages.map ((message)=>(
      <div  key={message._id}
      ref={lastMessageRef}>
      <Message message ={message}/>
      </div>
      ))}
    
   
    {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key ={idx}/>)}
    {!loading && messages.length === 0&& ( <p className ="text-center">send a message to start the coversation</p>)}
    
    </div>
  )
}

export default Messages