import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { API } from "../../../shared/Services/api"

const LocationsDetails = () => {
  const [coworkings, setCoworking] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    API.get("coworking").then((response) => {
      setCoworking(response.data.find((product) => product._id === id));
    });
  }, [id]);

  const {
    name,
    space,
    img,
    description,
    location,
    capacity,
    category,
  } = coworkings;
  

  





  //----> FormJS
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
    <>
      <FormContainer>
        <div className="form-container">
          <h2>Envianos un correo con la Informacion del Coworking que estas interesado!</h2>
          <form className="form-container2" ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input placeholder="Tu nombre" type="text" name="name" />
            <label>Email</label>
            <input placeholder="Email" type="email" name="email" />
            <label>Informacion</label>
            <textarea name="message" />
            <button className="bn54">
              <span class="bn54span">Enviar</span>
            </button>
            <div className="dataSecur">
              <p className="pClass" >Spot at Work tratará tus datos únicamente para tramitar tu solicitud. Puedes conocer cómo ejercer tus derechos de acceso, rectificación y supresión en nuestra Politica de Privacidad</p>
            </div>
          </form>

        </div>
      </FormContainer>

      <ContainerDetail>
        <div className="infoContainer">
          <div>
            <img className="imgContainer" src={img} alt={name} />
          </div>
          <div className="subInfo">
          <div className="titleContainer">
            <h3>{name}</h3>
          </div>
            <p><b>Espacio:</b> {space} m².</p>
            <p><b>Ubicacion:</b> {location}</p>
            <p><b>Capacidad</b> para {capacity}</p>
            <p><b>Modalidad:</b> {category}</p>
            <p><b>Descripción</b></p>
            <p className="pDescrip">{description}</p>
          </div>
        </div>

      </ContainerDetail>
    </>
  );
};

export default LocationsDetails;


const FormContainer = styled.div`

.form-container{
    width:100%;
    display: flex;
    flex-direction: column;
    text-align:center;
    justify-content: center;
    background-color:#f7b500;
}

.form-container2{
    display:flex;
    flex-direction:column;
    align-items:center;
}

input{
   width:260px;
   border: none;
   border-bottom: 2px solid black;
   outline:none;
   background:none;
}

textarea{ 
    width:260px;
    height:100px;
    resize:none;
    background-color:#E6E6E6;
    border: none;
}

label{
    padding:10px;
}

.dataSecur{
    
    width:350px;
    padding:20px;
    text-align:center;

    .pClass{
        font-size: 12px;
    }
}

.bn54 {
    margin-top:20px;
    position: relative;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 30px;
    width: 120px;
    opacity: 1;
    background-color: #6E6E6E;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  
  .bn54 .bn54span {
    color: white;
    font-size: 13px;
    font-weight: 15px;
    letter-spacing: 0.7px;
  }
  
  .bn54:hover {
    animation: bn54rotate 0.7s ease-in-out both;
    background-color:#f4a973;
  }
  
  .bn54:hover .bn54span {
    animation: bn54storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }
  
  @keyframes bn54rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  
  @keyframes bn54storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }



`


const ContainerDetail = styled.div`
  .infoContainer {
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    


    align-items:center;
  }

  .imgContainer{
      width:100%;
  }
  .titleContainer{
      text-align:center;
      margin: 20px;
      h3{
    color: rgb(255, 164, 53);
    font-family: "Josefin Sans", sans-serif;
    text-shadow: -4px 3px #000000;
    font-size:40px;
    margin:0;}
  }
  .subInfo{
      text-align:center;
     font-size: 30px;
      width: 70%;
  }
  .pDescrip{
     text-align: justify;
     padding-bottom:25px ;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px){
    .subInfo{
      text-align:center;
     font-size: 15px;
      width: 70%;
  }
  }

`;