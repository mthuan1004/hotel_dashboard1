import { SignInFormData } from '../login/Login'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export const verifyToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/verify-token`, {
        credentials: 'include',
    })
    if (!response.ok) {
        throw new Error('Token invalid')
    }
    return response.json()
}

export const signIn = async (formData: SignInFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    const responseBody = await response.json()
    if (!response.ok) {
        throw new Error(responseBody.message)
    }
    return responseBody
}

export const signOut = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
    })
    if (!response.ok) {
        throw new Error('Error during sign out')
    }
}


