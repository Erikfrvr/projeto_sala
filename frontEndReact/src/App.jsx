
import { useState } from 'react'
import Login from './pages/Login'
import CadastrarUsuario from './pages/CadastrarUsuario'
import './App.css'

function App() {
  const [tela, setTela] = useState('login')

  return (
   <>
   {tela === 'login'
     ? <Login onCadastrar={() => setTela('cadastro')} />
     : <CadastrarUsuario onVoltar={() => setTela('login')} />}
   </>
  )
}

export default App
