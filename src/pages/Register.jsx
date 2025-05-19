import { useState } from "react"
import { registerUser } from "../services/auth-service"

export default function Register() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const formData = new FormData()
    formData.append('phone', phone)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    if (avatar) formData.append('avatar', avatar)

    try {
      await registerUser(formData)
      alert('Usuario registrado con éxito')
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
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Crear cuenta</h2>

        <input
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="file"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={loading}
          className="w-full mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition disabled:opacity-50"
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  )
}
