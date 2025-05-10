import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chats" element={<h1>Listado de Chats</h1>} />
      <Route path="/chats/:id" element={<h1>Chat Individual</h1>} />
    </Routes>

  )
}

export default App
