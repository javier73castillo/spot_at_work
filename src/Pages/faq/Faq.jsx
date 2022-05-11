import React from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState } from 'react';
import "./faq.scss";
import emailjs from "@emailjs/browser";
import {  useRef } from "react";

export default function Faq() {
  
  const [number, setNumber] = useState(0);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_62cmprg",
        "template_va2ibko",
        form.current,
        "bnQweKR5uLmYM447e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  

  return (

    <div class="container">

      <div className="container-faq">
        <div className="faq">
          <h1 className="h1Class">
            Potenciamos el trabajo colaborativo.
          </h1>
          <h1 class="title2" className="h1Class"> Generamos ecosistemas
            profesionales.
          </h1>
        </div>
        <div class="form-faq">
          <form className="form-container2" ref={form} onSubmit={sendEmail}>
            <h2 class="title-form">Solicita información sobre nuestros servicios.</h2>
            <div class="contact">
              <input className="inputClass" type="text" placeholder="Tu nombre" name="name"/>
              <input className="inputClass" type="text" placeholder="E-mail" name="email" />
              <input className="inputClass" type="text" placeholder="Teléfono" name="message" />
            </div>
            <p className="pClass">
              SPOT AT WORK tratará tus datos únicamente para tramitar tu
              solicitud. Puedes conocer cómo ejercer tus derechos de acceso,
              rectificación y supresión en nuestra Política de Privacidad.
            </p>
            <button className="bn54">Enviar</button>
          </form>
        </div>
      </div>

      <div class="container-main">
        <h2 class="subtitle-faq">SPOT AP WORK</h2>
        <h1 class="title-faq">Proyectos y misión </h1>
        <p className="pClass" >
          Los retos urgentes sociales y medioambientales a los que nos
          enfrentamos exigen que las empresas y organizaciones adopten un
          compromiso de actuación para impulsar una reactivación sostenible.</p>
        <p className="pClass">
          Para poner en marcha estos cambios necesarios necesitamos nuevas ideas
          de negocio, transformar el tejido empresarial y cambiar nuestros
          hábitos y comportamientos. </p>

        <p className="pClass">Todo ello desde ecosistemas vivos donde la
          colaboración sea la base. Desde nuestra experiencia a nivel global en
          los últimos 15 años, SPOT AP WORK ofrece diferentes servicios para
          acompañar a empresas, organizaciones y administraciones en su camino
          para alcanzar los objetivos de la Agenda 2030. </p>

      </div>

      {/* box para servicios */}

      <div className="box-servicios-general">
        <div class="box-servicios">
          <h1 className="h1Class">Servicios Coworking </h1>
          <h3>Buscando nuevas ideas</h3>
        </div>
        <div class="box-servicios-img">
          <div class="box">
            <img src="./assets/services1.jpg" alt="coworking" />

            <p className="pClass"><b>Puestos flexibles | </b>Los puestos flexibles te permitirán trabajar por horas o días con tu portátil y elegir dónde sentarte cada vez que vengas a SPOT AT WORK. Organiza tus tiempos de manera flexible, puedes venir por la mañana, por la tarde o el día completo.</p>            <h4>Desde 100 €/mes</h4>

          </div>
          <div class="box">
            <img src="./assets/services3.jpg" alt="coworking" />
            <p className="pClass"><b>Despachos | </b>Encontrarás oficinas de distintos tamaños, desde 2 hasta 20 personas. Tú eliges cuándo tener intimidad para trabajar y cuándo conectar con la comunidad. Espacios ideales para reuniones o eventos privados.</p>
            <h4>Desde 290 €/mes</h4>
          </div>
          <div class="box">
            <img src="./assets/services2.jpg" alt="coworking" />
            <p className="pClass"><b>Bonos diarios o pack 10 días | </b>Conoce  nuestros espacios flexibles donde puedes reservar días para ir a trabajar. Disponemos de espacios con diferentes diseños de interiors. Reserva un pack y ven a tu coworking cuando lo necesites.</p>
            <h4> Desde 15 €/día</h4>
          </div>
        </div>
      </div>
      {/* box para servicios */}

      {/* preguntas frecuentes */}
      <div class="box-servicios">
        <h1 className="h1Class">Preguntas frecuentes</h1>
        <h3>Respondemos todas sus consultas</h3>
      </div>

      <div class="container-main-query">
        <div class="box-query">
          {number !== 1 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(1)} /> : number === 1 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
          <p className="pClass">¿Cómo funciona un espacio coworking?</p>

        </div>
        {number === 1 &&
          <div class="box-query" ><p class="request">Los espacios coworking´s que ofrece SPOT AT WORK a sus clientes dispone de una amplia gama de servicios y espacios de trabajo. Puedes ingresar a uno de estos espacios, con tu portali y/o las herramientas de trabajo que necesites y empezar a trabajar enseguida. Segun los servicios que contrates, accederás a diferentes recursos necesarios para tu rutina laboral. Todos los espacios tienen incluidos los gastos básicos de limpieza, electricidad, Wifi, dispenser con agua natural y maquina de café.</p>
          </div>}

        <div class="box-query">
          {number !== 2 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(2)} /> : number === 2 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
          <p className="pClass">¿Para qué sirve un coworking? </p>

        </div>

        {number === 2 &&
          <div class="box-query" ><p class="request">La respuesta a esta pregunta estará ajustada a los que busques y las necesidades que tengas. Pero podemos contarte las experiencias de nuestros clientes. La ventaja principal que puede observarse es la reducción de costos que implica montar una oficina de cero y mantenerla mensualmente, cuando en muchos casos simplemente disponen de ella en contados días de la semana.  Otra gran ventaja es tener la posibilidad de reservar espacios reducidos o amplios, según el evento del día o de la semana.</p>
          </div>}

        <div class="box-query">
          {number !== 3 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(3)} /> : number === 3 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
          <p className="pClass">¿Qué tan flexible son los espacios que ofrecen en sus despachos? </p>

        </div>

        {number === 3 &&
          <div class="box-query" ><p class="request">A veces no es fácil saber cuánto espacio necesitas y durante cuánto tiempo. Una alternativa podría ser contratar con un operador de espacios flexibles por una cuota mensual, en lugar de un contrato de alquiler tradicional.
            Los espacios de oficinas flexibles llevan tiempo siendo una solución viable para autónomos, startups y trabajadores en remoto. Ahora también están ganando adeptos entre las empresas más grandes por su flexibilidad, agilidad y estructura de precios.</p>
          </div>}
        <div class="box-query">
          {number !== 4 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(4)} /> : number === 4 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
          <p className="pClass">¿Las oficinas estan todas amuebladas? </p>

        </div>

        {number === 4 &&
          <div class="box-query" ><p class="request">Si, Todos nuestos despachos estan amueblados y preparados para que simplemente ingreses y no tengas que preocuparte por ningun detalle de confort. </p>
          </div>}
        <div class="box-query">
          {number !== 5 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(5)} /> : number === 5 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
          <p className="pClass">¿Se puede recibir cualquier tip ode visitas a las oficinas? </p>

        </div>

        {number === 5 &&
          <div class="box-query" ><p class="request">Sí, por supuesto. Puedes registrar los datos de los visitantes a través de la intranet y nosotros les atenderemos a su llegada.</p>
          </div>}
        <div class="box-query">
          {number !== 6 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(6)} /> : number === 6 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
          <p className="pClass">¿Puedo proponer alguna actividad en la comunidad? </p>

        </div>

        {number === 6 &&
          <div class="box-query" ><p class="request"> Por supuesto. Estamos siempre abiertos a recibir propuestas que permitan expandir ideas, fusionar diferentes areas y ampliar la red de profesioanles. Nuestros despachos permiten vincular empresarios, emprendedores, freelancer, hasta diferentes formaciones. </p>
          </div>}
      </div>
    </div>

  );
}
