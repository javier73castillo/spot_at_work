import styled from "styled-components";
import React, { useState } from 'react';
import { AiOutlinePrinter } from 'react-icons/ai'
import { AiOutlineWifi } from 'react-icons/ai'
import { BiHomeHeart } from 'react-icons/bi'
import { MdOutlineSocialDistance } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { BsFillLockFill } from 'react-icons/bs'
import { MdMicrowave } from 'react-icons/md'
import { GiKeyCard } from 'react-icons/gi'

import { BsTelephone } from 'react-icons/bs'
import { FiSpeaker } from 'react-icons/fi'
import { AiFillCar } from 'react-icons/ai'
import { FiCoffee } from 'react-icons/fi'
import { BiFoodMenu } from 'react-icons/bi'
import { BsTranslate } from 'react-icons/bs'
import { FaTruckLoading } from 'react-icons/fa'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'






const Home = () => {
    const [textStatus, setTextStatus] = useState(false);
    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(20);

    const textIconChange = () => {
        setTextStatus(!textStatus)
    }

    return (
        <>
            <Information>
                <div className="info-container">
                    <div className="img-container">
                        <h1>Reinventa tu forma de trabajar</h1>
                        <h2>Coworking a medida para empresas y autónomos</h2>
                    </div>

                    <div className="form-container">
                        <div className="form-witdh">
                            <h3>¿Qué tipo de puesto de coworking necesitas?</h3>
                            <div className="form-1">
                                <div className="form-11">
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Smart work</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Despachos</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Puestos flexibles</span>
                                    </div>
                                </div>
                                <div className="form-12">
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Oficina virtual</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Bono 10 dias</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Bono Bussines</span>
                                    </div>
                                </div>
                            </div>

                            <h3>¿En qué espacio?</h3>
                            <div className="form-2">
                                <div className="form-21">
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Madrid</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Barcelona</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Valencia</span>
                                    </div>
                                </div>
                                <div className="form-22">
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Malaga</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Smart work</span>
                                    </div>
                                    <div className="classCheckBox">
                                        <input type="checkbox" />
                                        <span className="text-checkbox">Marbella</span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-container">
                                <input placeholder="Tu nombre" type="text" className="form-control" />
                                <input placeholder="E-mail" type="text" className="form-control" />
                                <input placeholder="Telefono" type="text" className="form-control" />
                            </div>

                            <div className="condiciones">
                                <p>Spot at Work trata tus datos unicamente para tramitar tu solicitud. Puedes conocer como ejercer tus derechos de acceso, rectificacion y supervision en nuestra politica de privacidad</p>

                                <div className="checkbox-container">
                                    <div className="classCheckBox2">
                                        <input type="checkbox" />
                                        <span className="text-checkbox2">Recibir noticias e invitaciones o eventos de Spot at Work</span>
                                    </div>
                                    <div className="classCheckBox2">
                                        <input type="checkbox" />
                                        <span className="text-checkbox2">Recibir comunicaciones comerciales que puedan ser de tu interes</span>
                                    </div>

                                    <button> Me interesa</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Information>

            <Texto>
                <div className="texto-width">
                    <h2>Encuentra la oficina que mejor se adapte a ti o a tu equipo</h2>
                    <p>Hoy el mundo nos demanda flexibilidad. Además, hemos descubierto otras maneras de tener una oficina, con muchas ventajas y gran ahorro de costes fijos.</p>
                    <p>Por ello, creamos Smart Work, la fórmula de trabajo inteligente. Trabaja dónde y cuándo quieras en espacios profesionales y seguros, ubicados en zonas premium de Madrid, dotados con salas de reuniones y todos los servicios llave en mano para tu empresa. Combina teletrabajo y oficina como mejor te convenga. Con la posibilidad de rotar a tu equipo en el espacio, máxima flexibilidad, total seguridad y sin compromiso.</p>
                    <p>Podrás elegir entre despacho privado, puestos fijos o zona abierta de coworking en 5 espacios en Madrid. Configura tu propia tarifa o adquiere un bono de días para trabajar o reunirte días sueltos.</p>
                    <img src="https://madrid.impacthub.net/wp-content/uploads/2019/10/IMPACT_HUB_PIAMONTE_Despachos-1024x683.jpg" alt="espacio de trabajo" />
                </div>
            </Texto>

            <Servicios>

                <div className="incluidos">
                    <div className="incluidos-width">
                        <h1>Servicios Incluidos</h1>
                        <div className="incluidos-iconos">
                            <div className="iconos">
                                {number1 !== 9 ? <HostIcon onClick={() => setNumber1(9)} /> : number1 === 9 && <HostIcon onClick={() => setNumber1(20)} />}
                                {number1 !== 10 ? <PrintIcon onClick={() => setNumber1(10)} /> : number1 === 10 && <PrintIcon onClick={() => setNumber1(20)} />}
                                {number1 !== 11 ? <WifiIcon onClick={() => setNumber1(11)} /> : number1 === 11 && <WifiIcon onClick={() => setNumber1(20)} />}
                                {number1 !== 12 ? <SocialIcon onClick={() => setNumber1(12)} /> : number1 === 12 && <SocialIcon onClick={() => setNumber1(20)} />}
                                {number1 !== 13 ? <MeetingIcon onClick={() => setNumber1(13)} /> : number1 === 13 && <MeetingIcon onClick={() => setNumber1(20)} />}
                                {number1 !== 14 ? <LockIcon onClick={() => setNumber1(14)} /> : number1 === 14 && <LockIcon onClick={() => setNumber1(20)} />}
                                {number1 !== 15 ? <AreaIcon onClick={() => setNumber1(15)} /> : number1 === 15 && <AreaIcon onClick={() => setNumber1(20)} />}
                                {number1 !== 16 ? <KeyIcon onClick={() => setNumber1(16)} /> : number1 === 16 && <KeyIcon onClick={() => setNumber1(20)} />}
                            </div>
                            <div className="texto">

                                {number1 === 20 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Incluídos Sí o Sí!</p>
                                        <p>Estos son los servivios que ofrecen cualquiera de nuestros espacios</p>
                                    </div>}
                                {number1 === 9 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Host</p>
                                        <p>El host es la persona de referencia en tu espacio</p>
                                    </div>}
                                {number1 === 10 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Impresoras</p>
                                        <p>Imprime, fotocopia y escanea con tu código personal</p>
                                    </div>}
                                {number1 === 11 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Wifi</p>
                                        <p>Alta velocidad y estabilidad en todos los rincones</p>
                                    </div>}
                                {number1 === 12 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Atencion a visitas</p>
                                        <p>Recibimos a tus visitas con toda la profesionalidad</p>
                                    </div>}
                                {number1 === 13 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Salas de reuniones</p>
                                        <p>Accede a salas para tus reuniones y llamadas</p>
                                    </div>}
                                {number1 === 14 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Seguridad</p>
                                        <p>Disfruta de seguro para tu equipamiento</p>
                                    </div>}
                                {number1 === 15 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Zonas comunes</p>
                                        <p>Además, office con microondas, nevera, cafetera, etc</p>
                                    </div>}
                                {number1 === 16 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Acceso seguro</p>
                                        <p>Accede al espacio con tarjeta electrónica</p>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carta">
                    <div className="carta-width">
                        <h1>Servicios a la carta</h1>
                        <div className="carta-iconos">
                            <div className="iconos">

                                {number !== 1 ? <BsTelephoneIcon onClick={() => setNumber(1)} /> : number === 1 && <BsTelephoneIcon onClick={() => setNumber(0)} />}
                                {number !== 2 ? <FiSpeakerIcon onClick={() => setNumber(2)} /> : number === 2 && <FiSpeakerIcon onClick={() => setNumber(0)} />}
                                {number !== 3 ? <AiFillCarIcon onClick={() => setNumber(3)} /> : number === 3 && <AiFillCarIcon onClick={() => setNumber(0)} />}
                                {number !== 4 ? <FiCoffeeIcon onClick={() => setNumber(4)} /> : number === 4 && <FiCoffeeIcon onClick={() => setNumber(0)} />}
                                {number !== 5 ? <BiFoodMenuIcon onClick={() => setNumber(5)} /> : number === 5 && <BiFoodMenuIcon onClick={() => setNumber(0)} />}
                                {number !== 6 ? <BsTranslateIcon onClick={() => setNumber(6)} /> : number === 6 && <BsTranslateIcon onClick={() => setNumber(0)} />}
                                {number !== 7 ? <FaTruckLoadingIcon onClick={() => setNumber(7)} /> : number === 7 && <FaTruckLoadingIcon onClick={() => setNumber(0)} />}
                                {number !== 8 ? <BsFillChatLeftDotsFillIcon onClick={() => setNumber(8)} /> : number === 8 && <BsFillChatLeftDotsFillIcon onClick={() => setNumber(0)} />}

                            </div>
                            <div className="texto">

                                {number === 0 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">A tú Gusto!</p>
                                        <p>Por un pequeño extra, mira de lo que puedes disfrutar.</p>
                                    </div>}
                                {number === 1 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Telefonía</p>
                                        <p>Números propios, desvió de llamadas y atención personalizada.</p>
                                    </div>}
                                {number === 2 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Alquiler de aparatos</p>
                                        <p>Disponemos de material para conferencias</p>
                                    </div>}
                                {number === 3 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Parking</p>
                                        <p>Consulta nuestros acuerdos con parkings cercanos</p>
                                    </div>}
                                {number === 4 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Café y agua para reuniones</p>
                                        <p>Solicítanos y nos ocupamos</p>
                                    </div>}
                                {number === 5 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Mensajería y paqueterías</p>
                                        <p>Envía tu correspondencia sin moverte de tu espacio</p>
                                    </div>}
                                {number === 6 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Traducción</p>
                                        <p>Consulta nuestras opciones y tarifas</p>
                                    </div>}
                                {number === 7 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Mudanza</p>
                                        <p>Te ayudamos a traer tu oficina</p>
                                    </div>}
                                {number === 8 &&
                                    <div class="texto-1" >
                                        <p className="titulo-texto">Networking</p>
                                        <p>Conecta con otros miembros de nuestra comunidad</p>
                                    </div>}

                            </div>

                        </div>
                    </div>
                </div>

            


            </Servicios>
        </>
    )
}

export default Home

const Information = styled.div`

    .info-container{
        width: 100%;
        display: flex;
        .img-container{
            width: 60%;
            background-image: url('https://madrid.impacthub.net/wp-content/uploads/2020/06/Smart-work-scaled-800.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 700px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            h1{
                color: white;
                text-align: center;
                max-width: 647px;
                font-size: 71px;
                text-shadow: -4px 3px #000000;

            }

            h2{
                color: white;
                text-align: center;
                font-size: 35px;
                text-shadow: -4px 3px #000000;

            }
        }

        .form-container{
            background-color: #F6B401;
            width: 40%;
            height: 100%;
            min-height: 700px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .form-witdh{
                width: 100%;
                max-width: 523px;
            }

            .form-1{
                display: flex;
                justify-content: space-between;
                width: 100%;
                max-width: 426px;

                .form-11{
                    .classCheckBox{
                        input{
                        border-radius: 20px;
                    }

                        span{
                        }
                    }
                }
            }

            .form-2{
                display: flex;
                justify-content: space-between;
                width: 100%;
                max-width: 426px;
                padding-bottom: 10px;
            }

            .input-container{
                width: 100%;
                max-width: 426px;
                display: flex;
                flex-direction: column;

                input{
                    margin-top: 8px;
                    border: 2px solid;
                    border-color: white;
                    background-color: transparent;
                    ::placeholder { color: white; }
                }
            }

            .condiciones{
                width: 100%;
                max-width: 426px;
                text-align: justify;
            }

            .checkbox-container{

                button{
                    position: relative;
                    top: 20px;
                    padding: 5px 15px 5px 15px;
                    border: 2px solid;
                    background-color: transparent;
                    border-color: white;
                    color: white;
                    cursor: pointer;
                }

            }
        }
    }

    @media screen and (min-width: 280px) and (max-width:1023px){
        .info-container{
            display: flex;
            flex-direction: column;

            .img-container{
                width: 100%;
                align-items: center;

                h1{
                    font-size: 48px;

                }


            }

            .form-container{
            width: 100%;
            min-width: 100%;
            

            .form-witdh{
                max-width: 310px;
                height: 800px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: justify;
            }

            
        }
        }
        
    }
    
`

const Texto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;

    .texto-width{
        width: 100%;
        max-width: 852px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;

        img{
            max-width: 80%;
        }

        h1{
            width: 100%;
            max-width: 852px;
        }
    }

    @media screen and (min-width: 280px) and (max-width:1023px){
        display: flex;
        flex-direction: column;
        align-items: center;

        .texto-width{
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
                text-align: center;
            }
        }
    }
    
`

const Servicios = styled.div`

    .incluidos{
        
        width: 100%;
        height: 100%;
        background-color: #F6B401;
        display: flex;
        flex-direction: column;
        align-items: center;
        

        .incluidos-width{
            width: 80%;
            align-items: center;
        }

        .incluidos-iconos{
            display: flex;
            align-items: center;
            justify-content: space-around;
            max-width: 1240px;
            height: 100%;

            .texto-1{
                text-align: center;
                height: 120px;
                max-width: 200px;

                .titulo-texto{
                    font-weight: bold;
                }
            }
        }
        

    }

    .carta{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .carta-width{
            width: 80%;
            align-items: center;
        }

        .carta-iconos{

            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-around;
            max-width: 1240px;

            .texto-1{
                text-align: center;
                height: 120px;
                max-width: 200px;

                .titulo-texto{
                    font-weight: bold;
                }
            }
            
        }

        h1{
            display: flex;
            justify-content: flex-end;

        }
     
        
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

    @media screen and (min-width: 280px) and (max-width:1023px){
        display: flex;
        flex-direction: column;
        align-items: center;

        .incluidos{
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;

            .incluidos-width{
                height: 100%;
                h1{
                    text-align: center;
                }
            }

            .incluidos-iconos{
                display: flex;
                flex-direction: column;
                height: 100%;
                
                
                .iconos{
                    flex-wrap: wrap;
                    display: flex;
                    justify-content: center;
                }
            }
        }

        .carta{
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;

            .carta-width{
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                h1{
                    text-align: center;
                }

                .carta-iconos{
                    display: flex;
                    flex-direction: column;
                    height: 100%;

                    .iconos{
                        flex-wrap: wrap;
                        display: flex;
                        justify-content: center;
                    }
                }
            }
            .carta-iconos{
                align-items: center;
                display: flex;
                flex-direction: column;
                height: 300px;
            }
        }


        .map-container{
            iframe{

            }
        }

    }
`

const PrintIcon = styled(AiOutlinePrinter)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`

const WifiIcon = styled(AiOutlineWifi)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`
const HostIcon = styled(BiHomeHeart)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`
const SocialIcon = styled(MdOutlineSocialDistance)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`

const MeetingIcon = styled(IoIosPeople)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`
const LockIcon = styled(BsFillLockFill)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`
const AreaIcon = styled(MdMicrowave)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`
const KeyIcon = styled(GiKeyCard)`
    font-size: 45px;
    cursor: pointer;
    color: white;
    padding: 0 20px 20px 20px;
`


const BsTelephoneIcon = styled(BsTelephone)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`
const FiSpeakerIcon = styled(FiSpeaker)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`
const AiFillCarIcon = styled(AiFillCar)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`
const FiCoffeeIcon = styled(FiCoffee)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`
const BiFoodMenuIcon = styled(BiFoodMenu)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`
const BsTranslateIcon = styled(BsTranslate)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`
const FaTruckLoadingIcon = styled(FaTruckLoading)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`
const BsFillChatLeftDotsFillIcon = styled(BsFillChatLeftDotsFill)`
    font-size: 45px;
    cursor: pointer;
    color: #F6B401;
    padding: 0 20px 20px 20px;
`