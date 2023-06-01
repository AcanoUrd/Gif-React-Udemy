import { useState,useEffect } from "react"
import { Message } from "./Message";
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Antonio',
        email: 'yo.com'
    })
    const {username, email} = formState;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(() => {
      //console.log('Useeffect Called');
    }, [])
    useEffect(() => {
        //console.log('formState Called');
    }, [formState])
    useEffect(() => {
        //console.log('Email changed');
    }, [email])
    
    return (
        <>    
            <h1>SimpleForm</h1>
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="yo.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username == 'Antonio2') && <Message/>
            }
        </>
    )
}
