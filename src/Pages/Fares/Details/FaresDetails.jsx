import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const FaresDetails = () => {
  const [fares, setFares] = useState([]);
  const { id } = useParams();
  const urlPage = "https://co-working-back.vercel.app/api/fares";

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setFares(response.data.find((fare) => fare._id === id));

    });
  }, [id]);
  console.log(fares)
  const { name, description, service, coworking, price } = fares;




  return (

    <Header>
      <div className="headerFares">
      </div>
      
          <div className="headerContain">
            <h1>Tarifas | SPOT AT WORK</h1>
            <p> Conoce nuestra oferta de servicios para empresas, pymes y profesionales autónomos. Consulta nuestras tarifas de coworking, eventos, salas para reuniones, rodajes o convenciones, servicios de consultoría y proyectos, todos a tu disposición y adaptados a tus necesidades.</p>
            
          </div>
          <div className="center">
          <div className="card">
                  <h1 className="title">{name}</h1>
                  <p className="parrafo">{description}</p>
                  <p className="parrafo">Servicios incluidos:</p>
                  <div className="serviceInclude">
                  {service && service.map((s)=> {
                    return( 
                      <h1 className="service">|{s}|</h1>
                    )
                  })}
                  </div>
                  <p className="price">desde {price}€</p>
                  
          </div>

          <div className="cardImg">
            {coworking && coworking.map((c)=>{
              return (
                <img src={c.img} alt=""/>
              )
            })}
            </div>
          </div>
    </Header>
  )

}

const Header = styled.div`
margin-bottom: 10px;
padding: 0px;
max-width:100%;

.headerFares{
  margin: 5px 0px;
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position:top;
  background-image: url('https://images.unsplash.com/photo-1556565681-67b9cd907d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
}
.center{
  display: flex;
  width: 90%;
  height: 100%;
  margin: 10px auto;
  flex-direction: row;
}
.headerContain{
  display:flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  border-bottom: 2px solid #FAD7A0;
}
h1{
  font-size: 28px;
  margin: 10px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #A04000;
}
p{
  font-size: 24px;
  padding: 2rem;
  text-align:justify;
  margin:0px;
  font-family: 'Merriweather', serif;
}
.serviceInclude{
  display: flex;
  flex-direction: row;
  width: 400px;
}
.parrafo{
  font-size: 20px;
  padding: 1rem;
  font-family: 'Fira Sans', sans-serif;
}
.price{
  font-size: 30px;
  padding: 1rem;
  margin: 2rem auto;
  border: 2px solid orange;
  color: orange;
  font-family: 'Bebas Neue', cursive;
}
.service{
  font-size:18px;
  color: #EB984E;
  margin: 0px 2rem;
}
.serviceInclude{
  display: flex;
  flex-direction: row;
  width: 400px;
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}
.details{
  display: flex;
  flex-direction: row;
  max-width: 100%;
  padding: 20px;
}
.description {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.descriptionText{
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
}
.card{
  display: flex;
  flex-direction:column;
  width: 100%;
  height: 350px;
  
}
.cardImg{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 100%;
  height: 350px;
  padding: 1rem 0px;

}
img{max-width:100%;}

.cowork{
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 450px;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80');
}

@media (max-width: 600px) {
  p{
  font-size: 16px;}
  
}
.parrafo{
  font-size:14px;
}


`

export default FaresDetails
