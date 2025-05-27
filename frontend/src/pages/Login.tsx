import React from "react"
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Forms/Form";
import BackgroundIndex from "../components/background/BackgroundIndex";
const Login: React.FC = () => {
const navigate = useNavigate()
  const handleLogin = (data: { email: string; password: string; }) => {
   if (data.email === 'test@example.com' && data.password === '123') {
      navigate('/index')
    } else {
      alert('Correo o contraseña incorrectos')
      navigate('/');
    }
}
  return (
    <BackgroundIndex>
<div>
 <Form mode="login" onSubmit={handleLogin}/>
</div>
    </BackgroundIndex>
    
  )}
  export default Login;