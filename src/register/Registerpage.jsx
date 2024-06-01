import React from 'react';
import './registerpage.css';

export const Registerpage = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Sign Up</h2>
        <p>Create an account</p>
        <form>
          <label htmlFor="fullname">NOMBRE</label>
          <input type="text" id="fullname" name="fullname" placeholder="tu nombre" />
          
          <label htmlFor="email">CORREO ELECTRÓNICO</label>
          <input type="email" id="email" name="email" placeholder="tu correo electrónico" />
          
          <label htmlFor="password">CONTRASEÑA</label>
          <input type="password" id="password" name="password" />
          
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;