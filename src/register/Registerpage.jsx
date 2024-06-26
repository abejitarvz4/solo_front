import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './registerpage.css';
import { auth } from '../firebaseConfig/firebase';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export const Registerpage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);
    } catch (error) {
      setError(error.message);
      console.error('Error registering user:', error);
    }
  };

  const registro = () => {
    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Tu cuenta ha sido creada con éxito',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      navigate('/Login');
    });
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Sign Up</h2>
        <p>Create an account</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">NOMBRE</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="tu nombre"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          
          <label htmlFor="email">CORREO ELECTRÓNICO</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tu correo electrónico"
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
          
          <button type="submit" onClick={registro}>Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;
