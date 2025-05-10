import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/register" element={<h1>Página de Registro</h1>} />
      <Route path="/login" element={<h1>Página de Login</h1>} />
      <Route path="/chats" element={<h1>Listado de Chats</h1>} />
      <Route path="/chats/:id" element={<h1>Chat Individual</h1>} />
    </Routes>

  )
}

export default App
