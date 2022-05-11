import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./_footer.scss"
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiFillGithub } from 'react-icons/ai';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_62cmprg', 'template_va2ibko', form.current, 'bnQweKR5uLmYM447e')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset()
  };

  return (
    <div className="footer-container">

      <div className="logo-politicas">
        <img className="footer-logo" src="./logofoot.png" alt="logo foot" />
        <div className="politicas">
          <p className="p-footer">Visita nuestras Oficinas</p>
          <p className="p-footer">Política de Privacidad</p>
          <p className="p-footer">Política de cookies</p>
        </div>
        <p>Todos los precios sin IVA incluído</p>
      </div>


      <div className="form-container">
        <h2>Suscríbete a nuestra newsletter</h2>
        <form className="form-container2" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="input-footer" placeholder="Tu nombre" type="text" name="name" />
          <label>Email</label>
          <input className="input-footer" placeholder="Email" type="email" name="email" />
          <div className="classCheckBox">
            <input type="checkbox" />
            <span className="text-footer">Acepto recibir noticias e invitaciones a eventos de Spot at Home.</span>
          </div>
          <div className="classCheckBox">
            <input type="checkbox" />
            <span className="text-footer">Acepto recibir información sobre productos y servicios de Spot at Home.</span>
          </div>
          <button id="btn-footer-enviar">Enviar</button>
        </form>
      </div>


      <div className="icon-container">
        <h2> <AiOutlineYoutube style={{ color: "white" }} /> </h2>
        <h2> <AiOutlineInstagram style={{ color: "white" }} /> </h2>
        <h2> <AiOutlineFacebook style={{ color: "white" }} /> </h2>
        <h2> <AiFillGithub style={{ color: "white" }} /> </h2>
      </div>
    </div>
  );
};