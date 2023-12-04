import "./Hero.scss";
import hero_logo from "../../assets/hero_logo.png";
import hero_main_MOB from "../../assets/mobile/hero_main_MOB.svg";

import ball_3_MOB from "../../assets/mobile/ball_3_MOB.svg";
import ball_5_MOB from "../../assets/mobile/ball_5_MOB.svg";
import ball_8_MOB from "../../assets/mobile/ball_8_MOB.svg";

import ball_3_DT from "../../assets/desktop/ball_3_DT.svg";
import ball_5_DT from "../../assets/desktop/ball_5_DT.svg";
import ball_8_DT from "../../assets/desktop/ball_8_DT.svg";
import { IconParamsT } from "../../types/iconParamsT";
import Responsive_icon from "../Responsive_icon/Responsive_icon";

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
  return (
    <section className="hero">
      <div className="container_hero">
        <div className="hero_images">
          {/* <picture>
            <img className="hero_logo" src={hero_main_MOB} alt="Hero image" />
          </picture> */}
          {ball_icons_data.map((ballObj) => (
            <Responsive_icon key={ballObj.className} {...ballObj} />
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
