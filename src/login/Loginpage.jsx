import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig/firebase'; 
import { useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';
import './loginpage.css';

export const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      navigate('/'); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesion',
        text: 'Intentalo de nuevo',
      });
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">CORREO ELECTRÓNICO</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password">CONTRASEÑA</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
