'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    alert('Sistema de login em desenvolvimento! Email: ' + email)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Login da Loja</h2>
        <input 
          type="email" 
          placeholder="Seu e-mail" 
          className="border p-2 w-full mb-4 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Senha" className="border p-2 w-full mb-4 text-black" />
        <button className="bg-blue-600 text-white w-full py-2 rounded">Entrar</button>
      </form>
    </div>
  )
}
