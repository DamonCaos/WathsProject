import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth-service.js";
import { useAuth } from "../context/AuthContexrt.jsx";

export default function Login() {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await loginUser({ identifier, password })
      login(data.user, data.token)
      navigate('/chats')
    } catch (err) {
      setError(err.message)
      
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Teléfono o email"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}