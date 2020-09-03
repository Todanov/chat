import React, { useState } from 'react'
import useInterval from '@use-it/interval'

import './chat.css'

const messages=[
    {text: 'Tasy Hello?'},
    {text: 'Hey, My Love Nik) How Are you?'},
    {text: 'I am fine, Thanks!'},
    {text: 'We are going to home?'},
    {text: 'Yes'},
    {text: 'See you my love'},
    {text: ' Ok, Tasy ...Love you!'},
    {text: 'Me too'},
]

export default function Chat(){
    const [messagetoShow,setMessageToShow]=useState(0)

  useInterval(()=>{
        setMessageToShow( (messagetoShow) => messagetoShow +1)
    },3000)



    return (
            <div className='container'>
              <div className="Chats">
                {messages.map((message,index)=>{
                    const even = index % 2 ===0

                    if(messagetoShow +1 === index){
                        return <Typing  key={index} even={even}/>
                    }

                    if(index > messagetoShow) return <div key={index}/>
                    return <MessagesAll key={index} message={message} />    
                })}
            </div>
        </div>
    )
}

function Typing({even}){
    return(
        <div className={`typing ${even ? 'is-right' : 'is-left'}`}>
            <div className='dots'>
                
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

function MessagesAll ({message}) {
    return(
                        <div  className='messages'>
                           <div className='avatar'>=)</div>
                            <div className='text'>{message.text}</div>  
                            <div className='avatarl'>(-</div>
                        </div>
    )
}