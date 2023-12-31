import {uniqBy} from 'lodash'
import { useEffect } from 'react'

export default function Message({messagesArray, auth, selectedImage}){
    console.log(messagesArray)
    const messages = [...messagesArray]
    console.log(messages)
    let messageElem = messages.map((message, index)=>
    <div className={`message ${message.mine || 
        message.sender === auth? 'right': 'left'} `} key={index}>
        <div className='message-main'>
        {message.file? 
            <>
                {selectedImage?<img src={selectedImage} 
                        alt='car' className='display-image'/>
                :<img src={`http://localhost:3000/uploads/${message.file}`} 
                        alt='car' className='display-image'/>}
                <div>{message.text}</div>
            </>: message.text}
        </div>
    </div>)
    return(
        <>
            {messageElem}
        </>
    )
}