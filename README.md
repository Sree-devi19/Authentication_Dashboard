# 🔐 Authentication Dashboard  

A responsive authentication system built with **React**, **Firebase**, and **Tailwind CSS**, featuring secure login/signup flows and protected routes.  
  

## 🚀 Features  
- **Email/Password Authentication** (Login & Signup)  
- **Password Strength Meter** with real-time validation  
- **Protected Routes** using React Router  
- **Mobile-Friendly UI** with Tailwind CSS  
- **Error Handling** for Firebase auth errors  
- **Loading States** with spinners  

## 🛠️ Tech Stack  
- **Frontend**: React, Vite  
- **Styling**: Tailwind CSS  
- **Authentication**: Firebase Auth  
- **Routing**: React Router
- **UI icons**: Heroicons 

## Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Firebase account

## ⚙️ Installation  
1. Clone the repo:  
   git clone https://github.com/Sree-devi19/Authentication_Dashboard.git
   
2. Navigate to the project directory:
   cd auth-dashboard

3. Install dependencies:
   npm install

## Firebase Setup
1. Create a Firebase project at firebase.google.com
2. Enable Email/Password authentication in Firebase Console
3. Create a .env file in the root directory with your Firebase config:
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
4. Get your config from: Firebase Console > Project Settings > Web App.

## Running Locally
Start the development server:
npm run dev

## 📂 Project Structure

src/
├── assets/            # Static assets
├── components/        # Reusable components
│   ├── AuthForm.jsx   # Login/Signup form
│   ├── Dashboard.jsx  # Protected page
│   └── ProtectedRoute.jsx # Route guard
├── firebase/          # Firebase configuration
│   └── config.js      # Firebase initialization
├── App.jsx            # Main application
└── main.jsx           # Entry point

## 📝 Notes for Developers
- This project is not deployed intentionally (for learning purposes)
- All authentication logic is handled by Firebase
- Tailwind CSS is used for styling (no separate CSS files)
