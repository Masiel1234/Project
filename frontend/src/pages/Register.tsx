
import { useNavigate } from "react-router-dom"
import BackgroundHome from "../components/background/BackgroundIndex"
import { Form } from "../components/Forms/Form"

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (data: { email: string; password: string; name?: string }) => {

    if (data.email && data.name && data.password) {
     alert(`Bienvenido/a, ${data.name || 'usuario'}!`);
     navigate('/index') 
    }else{
      alert('Error');
    }
};
  return (
    <BackgroundHome>
<div className="">
  <Form mode="register" onSubmit={handleRegister}/>
</div>
      </BackgroundHome>
  )}
