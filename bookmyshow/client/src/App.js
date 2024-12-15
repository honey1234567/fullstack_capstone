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
      </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App
