import React from 'react';
import './loginpage.css';

export const Loginpage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Sign in to continue</p>
        <form>
          <label htmlFor="email">CORREO ELECTRÓNICO</label>
          <input type="email" id="email" name="email" placeholder="correo electronico" />
          
          <label htmlFor="password">CONTRASEÑA</label>
          <input type="password" id="password" name="password" />
          
          <button type="submit">log in</button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;