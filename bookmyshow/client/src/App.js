import React from 'react'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register  from './pages/Register';
import store from "./redux/store"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Partner from "./pages/Partner";
import SingleMovie from "./pages/Home/SingleMovie";
import BookShow from './pages/Home/BookShow';
import Forget from "./pages/Profile/ForgetPassword";
import Reset from "./pages/Profile/ResetPassword";
function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/partner" element={<ProtectedRoute><Partner /></ProtectedRoute>} />
        <Route path="/movie/:id" element={<ProtectedRoute><SingleMovie /></ProtectedRoute>} />
        <Route path="/book-show/:id" element={<ProtectedRoute><BookShow /></ProtectedRoute>} />
        <Route path="/forget" element={<Forget />} />

         <Route path="/reset/:email" element={<Reset />} />
      </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App
