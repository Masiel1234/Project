import React from "react";
import { useState } from "react";
import Button from "../button/Button";

type Mode = 'login' | 'register' 
type Props = {
    mode: Mode
    onSubmit: (data: {email: string; password: string;name?: string; confirmPassword?: string;}) => void
}
export const Form: React.FC<Props> = ({mode, onSubmit}) =>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [error,setError] = useState('')



const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (mode === 'register'){ 
        if(password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    if(!name){
        setError('nombre es obligatorio')
        return
    }
}

    onSubmit({
      email,
      password,
      ...(mode === 'register' ? { name}:{}) })
      
}
return(

    <div className="w-full max-w-xs">
        <Button name="n" variant="return" to="/"/>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
        {mode === 'login' ? 'login' : 'Sign up'}
        </h2>
 <div className="mb-4">
        {mode === 'register' && (
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
            required/>
        )}
        </div>
         <div className="mb-4">
        <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
       <div className="mb-4">
        <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
        required/>
        </div>
        <div className="mb-4">
        {mode === 'register' &&(
            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        )}
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>} 
        <button className="bg-pink-400 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {mode === 'login' ? 'Enter' : 'Sign up'}
        </button>
    </form>
    
</div>
)
}




