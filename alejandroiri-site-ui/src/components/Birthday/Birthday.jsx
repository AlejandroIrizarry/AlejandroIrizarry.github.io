// Birthday.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Birthday.css";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
import birthday_1 from "/src/assets/birthday_1.json";
import birthday_2 from "/src/assets/birthday_2.json";
import birthday_3 from "/src/assets/birthday_3.json";
import gift from "/src/assets/gift.json";
import shiba from "/src/assets/shiba.json";
import heart from "/src/assets/heart.json";
import balloons from "/src/assets/balloons.json";
import google_ale from "/src/assets/google_ale.png";
import lsls from "/src/assets/lsls.jpg";
import salesforce_ale from "/src/assets/salesforce_ale.jpg";
import ftl from "/src/assets/ftl.jpg";

import kevin_1 from "/src/assets/birthday/kevin_1.jpg";
import kevin_2 from "/src/assets/birthday/kevin_2.jpg";
import kevin_3 from "/src/assets/birthday/kevin_3.jpg";
import kevin_4 from "/src/assets/birthday/kevin_4.jpg";
import kevin_5 from "/src/assets/birthday/kevin_5.jpg";
import kevin_6 from "/src/assets/birthday/kevin_6.jpg";
import kevin_7 from "/src/assets/birthday/kevin_7.jpg";
import kevin_8 from "/src/assets/birthday/kevin_8.jpg";
import kevin_9 from "/src/assets/birthday/kevin_9.jpg";
import kevin_10 from "/src/assets/birthday/kevin_10.jpg";
import kevin_11 from "/src/assets/birthday/kevin_11.jpg";
import kevin_12 from "/src/assets/birthday/kevin_12.jpg";
import kevin_13 from "/src/assets/birthday/kevin_13.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Birthday() {
  const [showGift, setShowGift] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowGift(false);
  };

  const handleYesClick = () => {
    setShowContent(true);
  };

  return (
    <div className={`birthday ${showGift ? "gift-page" : "content-page"}`}>
      {showGift ? (
        <div className="gift-container" onClick={handleClick}>
          <div className="gift-container-message">
            <p>
              Happy Birthday, <span className="highlight-red">Kevin</span>🎂!!!
            </p>
            <p>Open your gift :D</p>
          </div>
          <div className="present">
            <LottieAnimation animationData={gift} />
          </div>
        </div>
      ) : (
        <>
          <div className="gift-cards-container">
            <div className="gift-card">
              <div className="gift-card-left">
                <LottieAnimation animationData={birthday_1} />
              </div>
              <div className="gift-card-right">
                Hola mi amor,
                <br />
                <br /> Primero que todo, FELIZ CUMPLEAÑOS 🎉, ya tienes 21 y
                tengo suerte de estar aquí para compartir este momento tan
                especial para ti! 🎂 Desde que nos conocimos en la universidad,
                nuestra historia ha sido una montaña rusa maravillosa. Nunca
                imaginamos que llegaríamos a querernos tanto, ¡y mira dónde
                estamos ahora! Me siento como el nene mas bendecido del mundo
                por tenerte como mi mejor amigo, y jamás te cambiaria por otra
                cosa en el mundo ♡ Me hace feliz saber que tendré la oportunidad
                de pasar más años junto a ti, seguir conociéndote, ideando
                locuras, bromeando y amándote más cada día por la maravillosa
                persona que eres. Eres mi todo y estoy agradecido por cada
                momento a tu lado. <br /> <br />
                Con todo mi amor,
                <span className="highlight-orange"> Alejandro 🎈</span>
              </div>
            </div>
            <div className="gift-card">
              <div className="gift-card-left">
                <LottieAnimation animationData={birthday_3} />
              </div>
              <div className="gift-card-right">
                Felicidades, ya tienes 21 :D Ya puedes salir de jangueo como es
                🍾! Ahora, quiero compartir fotos de momentos especiales contigo
                mi corazoncito :3
              </div>
            </div>
            <div className="gift-card">
              <div className="gift-card-left">
                <LottieAnimation animationData={shiba} />
              </div>
              <div className="gift-card-right">
                Antes de enseñarte más, te pregunto otra vez,{" "}
                <span className="highlight-orange">me amas</span> :3?
                <br />
                <button className="yes-button" onClick={handleYesClick}>
                  Ti :3
                </button>
                <button
                  className="no-button"
                  onMouseEnter={() => {
                    const button = document.querySelector(".no-button");
                    const randomX = Math.floor(
                      Math.random() * window.innerWidth
                    );
                    const randomY = Math.floor(
                      Math.random() * window.innerHeight
                    );
                    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
                  }}
                >
                  Nu ;/
                </button>
              </div>
            </div>
            {showContent && (
              <span className="next-page">
                <div className="gift-card">
                  <div className="gift-card-left">
                    <LottieAnimation animationData={balloons} />
                  </div>
                  <div className="gift-card-right">
                    WEPAAA!!!! 🎉 Yo te amo mas. Ahora si las fotitos :3
                  </div>
                </div>
                <VerticalTimeline animate={true} lineColor={"red"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "white",
                      color: "black",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  white",
                    }}
                    date="Marzo 2023 - Mayo 2023"
                    iconStyle={{
                      display: "flex",
                      background: "white",
                      color: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    icon={<LottieAnimation animationData={heart} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Primeras aventuras...
                      <br />
                    </h3>
                    <p className="birthday-tl-message">
                      Aquí nos empezamos a conocer. Marzo 13 nos vimos en
                      persona y me lleve el primer hoodie tuyo jaja! Pasamos por
                      altas y bajas al principio, pero con todo y eso, nuestra
                      conexión y cariño por uno al otro nos ayuda a seguir hacia
                      adelante. Te amo :3
                    </p>
                    <span className="timeline-img-container">
                      <img className="timeline-img" src={kevin_1} />
                      <img className="timeline-img" src={kevin_3} />
                      <img className="timeline-img" src={kevin_7} />
                      <img className="timeline-img" src={kevin_9} />
                    </span>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "white",
                      color: "black",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  white",
                    }}
                    date="Aug 2023 - Sep 2023"
                    iconStyle={{
                      display: "flex",
                      background: "white",
                      color: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    icon={<LottieAnimation animationData={heart} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Volvimos de verano...
                    </h3>
                    <p className="birthday-tl-message">
                      Paso un verano largo sin verte y ahora volvimos a vernos
                      después de un tiempito. Estaba loco de verte ya. Contaba
                      los días en California y por fin llegue. Si, tuvimos una
                      que otra peleita, pero con todo y eso nos seguiamos
                      queriendo cc :3 Salimos y disfrutamos los momentos. Fuimos
                      hasta a la playa en Manati!
                      <span className="timeline-img-container">
                        <img className="timeline-img" src={kevin_13} />
                        <img className="timeline-img" src={kevin_11} />
                        <img className="timeline-img rotate" src={kevin_12} />
                      </span>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "white",
                      color: "black",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  white",
                    }}
                    date="Octubre 2023 - Ahora"
                    iconStyle={{
                      display: "flex",
                      background: "white",
                      color: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    icon={<LottieAnimation animationData={heart} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Nos casamos ;3
                    </h3>
                    <p className="birthday-tl-message">
                      Mentira, pero nos llamaste oficialmente parejas :3 Si
                      supieras lo enchulao que ya estaba a este punto xd. Cuando
                      me confirmaste, literalmente quería llorar de la emoción
                      porque te amaba tanto (y todavía te amo obvio ;3 nuestro
                      aniversario es en Octubre 1, apunta :3). En este tiempo
                      hicimos nuestros proyectos personales, saliamos más en
                      dates (como el cine y starbucks), y estabamos
                      experimentando sentimientos más profundos. Espero poder
                      seguir haciendo mas memorias contigo mi gatito ♡ te amo y
                      Feliz Cumpleaños bb ♥️🎂
                    </p>
                    <span className="timeline-img-container">
                      <img className="timeline-img rotate" src={kevin_6} />
                      <img className="timeline-img rotate" src={kevin_10} />
                      <img className="timeline-img" src={kevin_2} />
                      <img className="timeline-img rotate" src={kevin_4} />
                      <img className="timeline-img rotate" src={kevin_5} />
                    </span>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="timeline-element"
                    iconStyle={{
                      display: "flex",
                      background: "white",
                      color: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    icon={<LottieAnimation animationData={heart} />}
                  />
                </VerticalTimeline>
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
