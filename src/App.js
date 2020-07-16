import React,{ useState, useEffect, Route } from "react"
import { Button,InputLabel,FormControl,Input} from '@material-ui/core';
import Message from "./Message";
import Card from './Card'

const App = () => {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('');
    const [messages, setMesseges] = useState([{userName: 'azi', message: 'hi there'}, { userName: 'abhi', message: 'hey buddy'}])
    


    let sendMessage = (e) => {
        e.preventDefault()
        setMesseges([...messages, {userName: user, message: input}])
        setInput('')
    }

    useEffect(() => {
        setUser(prompt())
        
    }, []);

    console.log(messages)

    let renderMessages  = () => {
    return messages.map((item, index) => <Message key={index} name={item.userName} message={item.message} />)
    }

    return (
        <div className='app'>
            

            <h1>Chat app</h1>
            <h2>Welcome {user}</h2>
            <form>
            <FormControl>
            <InputLabel htmlFor="my-input">Type message... </InputLabel>
            <Input onChange={(e) => setInput(e.target.value)} id="my-input" aria-describedby="my-helper-text" value={input} type='text' />
            <Button disabled={!input} type='submit' color="secondary" onClick={sendMessage}>send message</Button>
            </FormControl>
            </form>
            <div> {renderMessages()} </div>
            <Card />
        </div> 
    );
}



export default App;
