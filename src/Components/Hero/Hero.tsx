import "./Hero.scss";

import ball_3_MOB from "../../assets/mobile/ball_3_MOB.png";
import ball_5_MOB from "../../assets/mobile/ball_5_MOB.png";
import ball_8_MOB from "../../assets/mobile/ball_8_MOB.png";

import ball_3_DT from "../../assets/desktop/ball_3_DT.png";
import ball_5_DT from "../../assets/desktop/ball_5_DT.png";
import ball_8_DT from "../../assets/desktop/ball_8_DT.png";
import Responsive_icon from "../Responsive_icon/Responsive_icon";
import { IconParamsT } from "../../types/iconParamsT";

import anime from "animejs/lib/anime.es.js";

import { useRef, useEffect } from "react";

const ball_icons_data: IconParamsT[] = [
  {
    iconMOB: ball_3_MOB,
    iconDT: ball_3_DT,
    className: "ball_icon ball_3",
    alt: "ball icon",
  },
  {
    iconMOB: ball_5_MOB,
    iconDT: ball_5_DT,
    className: "ball_icon ball_5",
    alt: "ball icon",
  },
  {
    iconMOB: ball_8_MOB,
    iconDT: ball_8_DT,
    className: "ball_icon ball_8",
    alt: "ball icon",
  },
];

export default function Hero() {
  const ball3Ref = useRef(null);
  const ball5Ref = useRef(null);
  const ball8Ref = useRef(null);

  const refs = [ball3Ref, ball5Ref, ball8Ref];
  useEffect(() => {
    anime({
      targets: ball8Ref.current,
      translateY: 40,
      translateX: -50,
      rotate: -40,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });
    anime({
      targets: ball5Ref.current,
      translateY: 30,
      translateX: -20,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });
    anime({
      targets: ball3Ref.current,
      translateY: 30,
      translateX: [-20, 0],
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <section className="hero">
      <div className="container_hero">
        <div className="hero_images">
          {ball_icons_data.map((ballObj, i) => (
            <Responsive_icon
              key={ballObj.className}
              {...ballObj}
              ref={refs[i]}
            />
          ))}
        </div>
        <div className="hero_info">
          <div className="hero_title">
            <h1>Беспроигрышный тираж SuperLoto</h1>
          </div>
          <div className="hero_text">
            <p>
              <span>8 ноября 2023</span> проводим БЕСПРОИГРЫШНЫЙ ТИРАЖ.
            </p>
            <p>Все билеты, участвующие в тираже получат выигрыш.</p>
            <p className="hero_text_desktop">
              Покупай билеты на беспроигрышный тираж с 3 ноября по 8 ноября.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
