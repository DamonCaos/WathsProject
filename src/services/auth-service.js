const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export async function registerUser(formData) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        body: formData,
        
    })
    
    if (!response.ok) {
        throw new Error ('Error al registrar el usuario')
    }

    return await response.json()
}