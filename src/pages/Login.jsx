import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../services/auth-service.js"
import { useAuth } from "../context/AuthContexrt.jsx"

export default function Login() {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const data = await loginUser({ identifier, password })
      login(data.user, data.token)
      navigate("/chats")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Teléfono o email"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Iniciar sesión"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}
