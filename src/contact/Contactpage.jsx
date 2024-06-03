import React from 'react'
import './contactpage.css';
import { Link } from 'react-router-dom';

export const Contactpage = () => {
  return (
    <div className="home1">
    <div className="homeb-box">
        <h2>Contactanos</h2>
        <p>Vamos a conectar</p>
        <div className="logo-container">
          <Link to="https://www.instagram.com/alphacon.sanluis?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <img src="src/assets/images/insta-logo.webp" alt="" className='logo-insta'/>
          </Link>
          <Link to="https://www.facebook.com/Alphaconslrc" target="_blank">
            <img src="src/assets/images/face-logo.png" alt="" className='logo-face'/>
          </Link>
        </div>
        <p>alphacon.sanluisㅤㅤㅤㅤAlpha Conㅤ</p>
        <h3>Correo</h3>
        <h4>contacto@alphacon.com.mx</h4>
      </div>
    </div> 
  );
};

export default Contactpage;