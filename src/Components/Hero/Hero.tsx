import "./Hero.scss";
import hero_logo from "../../assets/hero_logo.png";
import ball_icon_3 from "../../assets/mobile/ball_icon_3.svg";
import ball_icon_5 from "../../assets/mobile/ball_icon_5.svg";
import ball_icon_8 from "../../assets/mobile/ball_icon_8.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container_hero">
        <div className="hero_images">
          <picture>
            <img className="hero_logo" src={hero_logo} alt="Hero image" />
          </picture>
          <div className="ball_icon ball_3">
            {/* <img src={ball_icon_3} alt="ball icon" /> */}
          </div>
          <picture className="ball_icon ball_5">
            <img src={ball_icon_5} alt="ball icon" />
          </picture>
          <picture className="ball_icon ball_8">
            <img src={ball_icon_8} alt="ball icon" />
          </picture>
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
