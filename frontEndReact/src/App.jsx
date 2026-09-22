
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import CadastrarUsuario from './pages/CadastrarUsuario'
import Menu from './pages/Menu'
import PainelProduto from './paineis/PainelProduto'
import PainelCategoria from './paineis/PainelCategoria'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<CadastrarUsuario />} />
        <Route path="/menu" element={<Menu />}>
          <Route index element={<PainelProduto />} />
          <Route path="categoria" element={<PainelCategoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
