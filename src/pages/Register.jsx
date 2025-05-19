import { useState } from "react";
import { registerUser } from "../services/auth-service";

export default function Register() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [error, setError] = useState(null)

  const habdleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('phone', phone)
    formData.append('name', name)

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
      <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      <button type="submit">Registrarse</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )

}