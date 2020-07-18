import React,{ useState, useEffect } from "react"
import { Button,InputLabel,FormControl,Input} from '@material-ui/core';
import Message from "./Message";


const App = () => {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('');
    const [messages, setMesseges] = useState([{userName: 'azi', text: 'hi there'}, { userName: 'abhi', text: 'hey buddy'}])
    

    let sendMessage = (e) => {
        e.preventDefault()
        setMesseges([...messages, {userName: user, text: input}])
        setInput('')
    }

    useEffect(() => {
        setUser(prompt())
    }, []);

    

    let renderMessages  = () => {
    return messages.map((item, index) => <Message  key={index} userName={user} message={item} />)
    }

    return (
        <div className='container'>
            <h1 className='h1-1'>Chat app</h1>
            <div> {renderMessages()} </div>
            <div className="row">
            <div className="text-justify">
            <form >
            <FormControl>
            <InputLabel htmlFor="my-input">Type message... </InputLabel>
            <Input onChange={(e) => setInput(e.target.value)} value={input} type='text' />
            <Button disabled={!input} type='submit' color="secondary" onClick={sendMessage}>send message</Button>
            </FormControl>
            </form>
            </div>
            </div>
            
        </div> 
    );
}



export default App;
