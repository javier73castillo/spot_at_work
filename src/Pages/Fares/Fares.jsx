import React from 'react'
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";



export const Fares = () => {
  const [fares, setFares] = useState([]);
  const url = "https://co-working-back.vercel.app/api/fares";
  useEffect(() => {
    axios.get(url).then((response) => {
      setFares(response.data);
    });
  }, [url]);



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
      <ContainerService>
        <div className="serviceContain">
          <div className="servicesIntro">
            <h1 className="textServices">Tarifas y Servicios </h1>
            

          </div>
          <div className='servicesForm'>
            <form className="form"  ref={form} onSubmit={sendEmail}>
              <h2 class="title-form">Solicita información sobre las tarifas.</h2>
              <div class="contact">
                <input className="inputClass" type="text" placeholder="Tu nombre" name='name'/>
                <input className="inputClass" type="text" placeholder="E-mail" name='email'/>
                <input className="inputClass" type="text" placeholder="Teléfono" name='message'/>
              </div>
              <button> Me interesa</button>
              <div className="descriptionFares">
              <p>
                SPOT AT WORK tratará tus datos únicamente para tramitar tu
                solicitud. Puedes conocer cómo ejercer tus derechos de acceso,
                rectificación y supresión en nuestra Política de Privacidad.
              </p>
              </div>
            </form>
          </div>

        </div>

      </ContainerService>

      <ContainerFares>
      
        <div className="containFares">
                <h1 className="title">Tarifas | SPOT AT WORK</h1>
                <p className="parrafo"> Conoce nuestra oferta de servicios para empresas, pymes y profesionales autónomos. Consulta nuestras tarifas de coworking, eventos, salas para reuniones, rodajes o convenciones, servicios de consultoría y proyectos, todos a tu disposición y adaptados a tus necesidades.</p>
                <p className="parrafo">
                Te presentamos una variada oferta para que te sumes a la mayor comunidad profesional que trabaja para crear impacto en la sociedad, tejiendo sinergias, sumando talento y aprendizaje para encontrar soluciones hacia una reactivación económica y social sostenible.
                </p>
      </div>


        {
          fares.map((fare) => {
            return (
              <div className="cardFares">
                <div className="faresCard">
                  <div className="faresDescription">
                    <h1 className="name">{fare.name}</h1>
                    <p className="description"> {fare.description}</p>
                    <p className="service">Servicios incluidos:</p>
                    <div className="serviceInclude">
                    {fare.service.map((s) => {
                      return (
                         
                        <p className="serviceList"> | { s } | </p>
                        )
                    }

                    )}
                    </div>
                    <p className="price"> Desde {fare.price} €</p>
                    <Link className="buttonClass" to={`/fares/${fare._id}`}><button className='btn'>Ver detalles</button></Link>
                  </div>

                  {fare.coworking.map((cowork) => {
                    return (
                      <div className="coworkImg" style={{ backgroundImage: `url(${cowork.img})` }}>
                        <div className="textCowork">
                          <h1 className="nameCowork">{cowork.name}</h1>
                          <h2 className="location"> {cowork.location}</h2>
                          <h3 className="space"> Espacio disponible {cowork.space} m²</h3>
                          <h3 className="capacity"> Capacidad para {cowork.capacity}</h3>
                          <h3 className="category"> {cowork.category}</h3>
                        </div>
                      </div>
                    )
                  })}
                  
                </div>
              </div>
            )
          })
        }

      </ContainerFares>
    </>
  )
}
const ContainerService = styled.div`
display:flex;
flex-direction: row;
max-width:100%;


.serviceContain{
  display:flex;
  max-width: 100%;
  height: 100%;
  align-items: center;
  margin: 0px;
 }
 .servicesForm{
   display: flex;
   justify-content: center;
   width: 100%;
   height: 100%;
 }
 .title-form{
   padding: 0px 2rem;
  margin: 0 auto;
 }
 .descriptionFares{
   display: flex;
   width: 100%;
   
 }
 p{
  text-align: justify;
  margin: 0 auto;
   padding: 0 2rem;
 }
 
.form{
  display:flex;
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:10px 1rem;
  background-color: beige;
  margin: 0 auto;

  button{
                    margin-bottom: 10px ;
                    padding: 5px 15px 5px 15px;
                    border: 2px solid;
                    background-color: gray;
                    border-color: white;
                    color: white;
                    cursor: pointer;
                }
}
.servicesIntro {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 370px;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
}
.textServices{
  color: white;
  text-align: right;
  line-height: 4.5rem;
  width: 80%;
  font-size: 85px;
  text-shadow: -4px 3px #000000;
}
@media (max-width: 600px){
  .serviceContain{
    flex-direction: column;
    width: 450px;
  }
  .textServices{
    font-size: 55px;
    height: 120px;
    line-height: 2.5rem;
  }
  .form{
    margin: 10px 0px;
    height: 450px;
  }
  
}

`
const ContainerFares = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

display: flex;
max-width:100%;
justify-content: center;
flex-direction: column;
margin: 2rem 0;

.containFares{
  display: flex;
  width: 100%;
  /* padding: 10px; */
  flex-direction: column;
}
.cardFares{
  width:100%;
  height: 600px;
  display: flex;
  flex-direction: row;
 
}
.title{
   padding: 0 0 0 2rem;
   
 }
.parrafo{
  text-align: justify;
  padding: 0px 2rem;
  margin: 10px;
  font-size: 24px;}
.faresCard{
  width:100%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
}
.faresDescription{
  width: 100%;
  height: 300px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}
.name{
  font-size: 26px;
  color: black;
  font-family: 'Merriweather', serif;
  text-transform:capitalize;
  
}
.containBtn{
  display: flex;
  width: 100%;
  justify-content:space-around;

}
.btn{
  display: flex;
  background-color: Transparent;
  border-radius: 5px;
  outline: none;
  width: 60px;
  color: black;
  width: 30%;
  justify-content: center;
  margin: 5px auto;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 0.7px;
}
.btn:hover {
 
  animation: bn54rotate 0.7s ease-in-out both;
    background-color:#D6DBDF;
}
.buttonClass{
  text-decoration: none;
}

.description{
  width: 95%;
  font-size: 24px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  color: black;
  text-align:justify;
}
.service{
  font-size: 18px;
  margin: 10px 0;
  color: black;
  font-style:italic;
  
}
.serviceIntro{
  width: 100%;
  display:flex;
  
}
.serviceList{
  margin: 0px;
  font-size: 18px;
  color: black;
  letter-spacing:2px;
}
.serviceInclude{
  display: flex;
  flex-direction: row;
  width: 400px;
}
.price{
  font-size: 28px;
  font-family: 'Anton', sans-serif;
  margin: 20px auto;
  color:#CA6F1E; 
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.coworkImg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  padding: 0px;
  margin: 0px;
  background-size: cover;
  background-repeat: no-repeat;
}
.textCowork{
  display: flex;
  background-color: rgba(0, 0, 5, 0.4);
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width:100%;
  height:100%;
}
.nameCowork{
  color:#EB984E; 
  text-shadow: -2px 3px #000000;
  font-size: 50px;
  margin: 0px
}
.space{
  font-size:18px;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;
}
.location{ font-size:15;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;}
.capacity{ font-size:12;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;}
.category{ font-size:12;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;}

@media (max-width: 600px){
  .textServices{
  line-height: 2rem;
  width: 80%;
  font-size: 45px;
 
}
.parrafo{font-size: 16px;}
  .faresCard{
  flex-direction: column;
  max-width:100%;
  margin: 0px 10px;
  padding: 0px;
  }
  .faresDescription{
  width: 100%;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
}
.coworkImg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 250px;
  background-size: cover;
    background-repeat: no-repeat;
}
.name{
  font-size: 18px;
}
.description{
  width: 95%;
  text-align: justify;
  font-size: 14px;
  margin: 0;
}
.service{
  font-size: 14px;
  margin: 10px 0;
}
.serviceList{
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 12px;
}
.price{
  font-size: 15px;
  font-family: 'Anton', sans-serif;
  
}
.btn{
  width: 35%;
}
.nameCowork{
  font-size: 24px;
}
}


`
