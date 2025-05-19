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

export async function loginUser(credentials)  {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error?.error || 'Error al inisicar sesiion')
    }

    return await response.json()
} 