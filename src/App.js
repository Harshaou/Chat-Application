import React,{ useState, useEffect } from "react"
import { Button,InputLabel,FormControl,Input } from '@material-ui/core';
import Message from "./Message";

const App = () => {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('pro Programer');
    const [messages, setMesseges] = useState([{azi: 'hi there', sara: 'hello', azi: 'woww'}]);
    


    let addMessage = (e) => {
        e.preventDefault()
        setMesseges([...messages, input])
        setInput('')
    }

    useEffect(() => {
        setUser(prompt('Welcome pro Programer'))
    },[]);

    let renderMessages  = () => {
    return messages.map((message, index) => <Message key={index} message={message} />)
    }

    return (
        <div className='app'>
            <h1>Chat app</h1>
            <h2>Welcome {user}</h2>
            <form>
            <FormControl>
            <InputLabel htmlFor="my-input">Type message... </InputLabel>
            <Input onChange={(e) => setInput(e.target.value)} id="my-input" aria-describedby="my-helper-text" value={input} type='text' />
            <Button disabled={!input} type='submit' color="secondary" onClick={addMessage}>send message</Button>
            </FormControl>
            </form>
            <div> {renderMessages()} </div>

        </div> 
    );
}

export default App;
