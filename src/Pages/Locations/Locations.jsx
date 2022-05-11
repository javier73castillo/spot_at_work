import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

export const Locations = () => {
  const [coworkings, setCoworking] = useState([]);
  const [search, setSearch] = useState([]);

  const urlPage = "https://co-working-back.vercel.app/api/coworking"

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setCoworking(response.data);
    });
  }, [urlPage]);


  const searchCoworking = (e) => {
    let results = coworkings.filter(
      (cowork) =>
        cowork.name.toLowerCase().trim().includes(e.target.value) ||
        cowork.location.toLowerCase().trim().includes(e.target.value)

    );
    setSearch(results);
  };
  console.log(search)





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




  return (<>
    <FormContainer>
      <div className="form-container">
        <h2>¡Envianos un correo con la Información del Coworking que estás interesado!</h2>
        <form className="form-container2" ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input placeholder="Tu nombre" type="text" name="name" />
          <label>Email</label>
          <input placeholder="Email" type="email" name="email" />
          <label>Información</label>
          <textarea name="message" />
          <button className="bn54">
            <span class="bn54span">Enviar</span>
          </button>
          <div className="dataSecur">
            <p className="pClass" >Spot at Work tratará tus datos únicamente para tramitar tu solicitud. Puedes conocer cómo ejercer tus derechos de acceso, rectificación y supresión en nuestra Política de Privacidad.</p>
          </div>
        </form>

      </div>
    </FormContainer>
    <InputContainer>
      <h2>Haz tu busqueda colocando el nombre o tu ubicación favorita.</h2>
      <input
        className="searchInput"
        onChange={(e) => searchCoworking(e)}
        placeholder="Coloca el nombre o ubicación del Coworking"
        type="text"
      />


    </InputContainer>

    <h1 className="locationTitle">Coworkings</h1>
    <Container>
      {search.length > 0 ? (

        <div className="infoContainer">
          {search.map((searched) => {

            return (

              <div className="cardContainer" key={searched._id}>


                <div className="coworkCard">

                  <div className="coworkImg" style={{ backgroundImage: `url(${searched.img})` }}>

                    <div className="frontText">
                      <div className="coworkSubtitle">
                        <h2 className="h2Spot">Spot at Work | Coworking</h2>
                        <h2 className="h2Class">{searched.name}</h2>
                      </div>

                      <p className="locationText">Ubicacion: {searched.location}</p>
                    </div>
                  </div>

                  <div className="coworkInfo">
                    <h3 className="coworkTitle">Spot at Work</h3>
                    <h1 className="h1Title">{searched.name}</h1>
                    <p>{searched.description}</p>
                  </div>
                  <NavLink className="btnLink" to={`/locations/${searched._id}`}>
                  <button className="bn54">
                    <span class="bn54span">Más Info</span>
                  </button>
                  </NavLink>
                </div>

              </div>

            )
          })}
        </div>) : (<>

          <Container>
            <div className="infoContainer">
              {coworkings.map((coworking) => {

                return (

                  <div className="cardContainer" key={coworking._id}>


                    <div className="coworkCard">

                      <div className="coworkImg" style={{ backgroundImage: `url(${coworking.img})` }}>

                        <div className="frontText">
                          <div className="coworkSubtitle">
                            <h2 className="h2Spot">Spot at Work | Coworking</h2>
                            <h2 className="h2Class">{coworking.name}</h2>
                          </div>

                          <p className="locationText">Ubicacion: {coworking.location}</p>
                        </div>
                      </div>

                      <div className="coworkInfo">
                        <h3 className="coworkTitle">Spot at Work</h3>
                        <h1 className="h1Title">{coworking.name}</h1>
                        <p>{coworking.description}</p>
                      </div>
                      <NavLink className="btnLink" to={`/locations/${coworking._id}`}><button className="bn54">
                        <span class="bn54span">Más Info</span>
                      </button></NavLink>

                    </div>
                    

                  </div>

                )
              })}
            </div>
          </Container></>)}
          <div className="map-container">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=148O7f5leFm19kzdHAYmvkchFf3EWeVWm&ehbc=2E312F" width="640" height="480" title="Map"></iframe>
                </div> 
    </Container>
  </>

  )
}

const InputContainer = styled.div`
display:flex;
flex-direction: column;

justify-content: center;

align-items:center;
background-color:#f7b500;
padding:25px;

h2{
  color: white;
  font-family: "Josefin Sans", sans-serif;
  text-shadow: -4px 3px #000000;
  font-size:40px;
  margin:0;
  margin-bottom:40px;
}
input{
  width:330px;
  text-align:center;
  border: none;
  border-bottom: 2px solid black;
  outline:none;
  background:none;
  font-size: 14.5px;
}


`

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
.btnLink{
  text-decoration: none;

}

.bn54 {
    margin-top:20px;
    position: relative;
    outline: none;
    
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

const Container = styled.div`

.infoContainer{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

.map-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem 0 4rem 0;

        iframe{
            width: 80%;
            height: 600px;
        }
    }

.cardContainer{
  width:320px;
  padding:20px;
}

.coworkCard{
    display: flex;
    width: 100%; 
     height: 100%;
    flex-direction:row;
    flex-wrap: wrap; 
    align-content: flex-start;
    
  }
  .coworkInfo{
    p{
        text-align: justify;
        display: -webkit-box;
        /* //FORMATO VERTICAL EN QUE SE LEERA EL TEXTO */
        -webkit-box-orient: vertical;
        /* LA CANTIDAD DE LINEAS QUE VAMOS A MOSTRAR ANTES DE CORTARLO */
        -webkit-line-clamp: 4;
        /* OCULTA EL RESTO DEL TEXTO */
        overflow: hidden;
      
    }
  }

  .coworkImg{
    width: 320px;
    height: 330px;
    background-repeat: no-repeat;
    
   

    .frontText{
      background-color: rgba(0, 0, 0, 0.5);
        width: 320px;
        height: 330px;
        margin:0;
        text-align:center;
        justify-content:space-evenly;
        display:flex;
        flex-direction:column;


      .h2Class{
        color: rgb(255, 164, 53);
        font-family: "Josefin Sans", sans-serif;
        text-shadow: -4px 3px #000000;
        font-size:40px;
        margin:0;
        padding:5px;
      }
        

      .locationText{
          margin:0;
          color: #F9B46F;
          font-family: "Josefin Sans", sans-serif;
          text-shadow: -4px 3px #000000;
          font-size:23px;
          padding:10px
        
      }

      .spaceText{
          color: #F9B46F;
          text-shadow: -4px 3px #000000;
          font-size:23px; 
          margin:0;
      }

      .h1Title{
        color: #F9B46F;
      }

      .h2Spot{
        color: white;
        font-size: 20px;
        letter-spacing:1px;
      }

    }
  }
  .coworkTitle{
    color:#f78a3c;
    letter-spacing:1px;
  }
  .btnLink{text-decoration: none;}

  .bn54 {
    position: relative;
    outline: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 30px;
    width: 120px;
    opacity: 1;
    background-color: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  
  .bn54 .bn54span {
    color: #000000;
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
