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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Iniciar sesión</h2>

        <input
          type="text"
          placeholder="Teléfono o email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  )
}
