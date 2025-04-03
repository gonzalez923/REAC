import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[usuario, setUsuario] = useState('')
  const[clave, SetClave] = useState('')
  const[logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento){
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento){
    SetClave(evento.target.value)

  }

  function ingresar(){
    if (usuario == 'admin' && clave == '123'){
    alert("inicio con exito")
    setLogueado(true)
  }else{
    alert('usuario o clave incorrecta')
  }
}
if (logueado){
  return(
  <>
      <h1>Registrar</h1>
      <input type = "text" id = "usuario"/>
      <input type = "password"  id = "clave"/>
      <botton>Registrar</botton> 

  </>
  );
}
  return (
    <>
    <h1>Inicio de Sesion</h1>
     <input type = "text" name = "usuario" id = "usuario" value ={usuario} onChange={cambiarUsuario}/>
     <input type = "password" name = "clave" id = "clave" value ={clave} onChange={cambiarClave} />
     <botton onClick = {ingresar}>Ingresar</botton>     
    </>
  )
}

export default App
