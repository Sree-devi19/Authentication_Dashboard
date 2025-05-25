import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthForm from './components/AuthForm'
import { Route, Routes } from 'react-router'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'


export default function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<AuthForm isLogin={true} />} />
        <Route path="/signup" element={<AuthForm isLogin={false} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<AuthForm isLogin={true} />} />
      </Routes>
    </div>
  )
}

