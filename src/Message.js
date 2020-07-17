import React from 'react';



const Message = ({message, userName}) => {
    const isUser = userName === message.userName
        return (
            <div className='message-card'>
            <div className="card-user">
            <p className='message-p'>{message.userName} :{message.text}</p>
            </div>
            </div>
        );
    }
    


export default Message;
