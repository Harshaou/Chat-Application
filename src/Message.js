import React from 'react';

const Message = ({message, name}) => {
    return (
        <div className='message-list'>
            <p>{name} :{message}</p>

        </div>
    );
}

export default Message;
