import { useState,useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";
export const FormWithCustomHooks = () => {
    const {formState, onInputChange, onResetForm, username, email, password} = useForm(
        {
            username: 'Antonio',
            email: 'yo.com',
            password: ''
        }
    )

    //const {username, email, password} = formState;

    return (
        <>    
            <h1>SimpleFormWithCustomHook</h1>
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
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
