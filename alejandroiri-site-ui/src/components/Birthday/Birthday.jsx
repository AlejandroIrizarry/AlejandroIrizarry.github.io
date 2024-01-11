// Birthday.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Birthday.css";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
import birthday_1 from "/src/assets/birthday_1.json";
import birthday_3 from "/src/assets/birthday_3.json";
import gift from "/src/assets/gift.json";
import shiba from "/src/assets/shiba.json";
import heart from "/src/assets/heart.json";
import balloons from "/src/assets/balloons.json";

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
              Happy Birthday, <span className="highlight-red">[name]</span>🎂!!!
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
                Happy Birthday [name],
                <br />
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat et, laudantium obcaecati eveniet commodi aliquam earum
                cumque alias a. Rem ex officia voluptas ab. Totam porro
                exercitationem ad iusto provident!
                <br /> <br />
                With love,
                <span className="highlight-orange"> [name] 🎈</span>
              </div>
            </div>
            <div className="gift-card">
              <div className="gift-card-left">
                <LottieAnimation animationData={birthday_3} />
              </div>
              <div className="gift-card-right">
                Congrats, Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Aliquid rerum fuga enim accusantium incidunt veniam
                possimus. Mollitia minima optio cum unde temporibus. Dolorem
                repellendus error iure? Aliquid quaerat odio libero.
              </div>
            </div>
            <div className="gift-card">
              <div className="gift-card-left">
                <LottieAnimation animationData={shiba} />
              </div>
              <div className="gift-card-right">
                Before we proceed, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Saepe nostrum distinctio molestias accusamus
                magnam sequi, labore vitae non maiores. Earum nulla,
                exercitationem a mollitia dolore iste accusamus sapiente quae
                voluptate.
                <span className="highlight-orange"> [question]</span>?
                <br />
                <button className="yes-button" onClick={handleYesClick}>
                  Yes
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
                  No
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis temporibus commodi numquam! Quaerat, commodi.
                    Maiores omnis sint tempora asperiores iusto exercitationem
                    consequuntur blanditiis iste totam quia, excepturi ipsa ad
                    rerum!!!!! ❣️
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
                    date="Jan 2023 - May 2023"
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
                      Event Title
                      <br />
                    </h3>
                    <p className="birthday-tl-message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non enim minima cupiditate quo sunt nemo, libero provident
                      voluptates? Dicta labore dolor illum exercitationem quasi
                      quisquam quas, tempore cumque quo a.
                    </p>
                    <span className="timeline-img-container">
                      {/* <img className="timeline-img" src={} /> */}
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
                      Event Title
                    </h3>
                    <p className="birthday-tl-message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur alias reprehenderit laudantium, maiores ullam
                      aperiam tempore praesentium pariatur fugit vel
                      exercitationem excepturi. Harum facere temporibus, sequi
                      reprehenderit rerum rem necessitatibus!
                      <span className="timeline-img-container">
                        {/* <img className="timeline-img" src={} />
                        <img className="timeline-img" src={} />
                        <img className="timeline-img rotate" src={} /> */}
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
                    date="Oct 2023 - Present"
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
                      Event Title
                    </h3>
                    <p className="birthday-tl-message">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum reiciendis consectetur reprehenderit pariatur odio
                      placeat dolores architecto incidunt repellat quaerat, ex
                      libero voluptas ducimus quas, itaque quidem similique
                      nisi. Rem. 🎂
                    </p>
                    <span className="timeline-img-container">
                      {/* <img className="timeline-img rotate" src={} />
                      <img className="timeline-img rotate" src={} />
                      <img className="timeline-img" src={} />
                      <img className="timeline-img rotate" src={} />
                      <img className="timeline-img rotate" src={} /> */}
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
