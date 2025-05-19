import { useState } from "react";
import { registerUser } from "../services/auth-service";

export default function Register() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
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
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      <button type="submit">Registrarse</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}
