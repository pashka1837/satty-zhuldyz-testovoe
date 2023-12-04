import menu_btn_MOB from "../../assets/mobile/menu_btn_MOB.svg";
import logo_MOB from "../../assets/mobile/logo_MOB.svg";
import notification_true_MOB from "../../assets/mobile/notification_true_MOB.svg";

import menu_btn_DT from "../../assets/desktop/menu_btn_DT.svg";
import logo_DT from "../../assets/desktop/logo_DT.svg";
import notification_true_DT from "../../assets/desktop/notification_true_DT.svg";

import { IconParamsT } from "../../types/iconParamsT";
import Responsive_icon from "../Responsive_icon/Responsive_icon";

import "./Navbar.scss";
import { useState } from "react";

const menu_btn: IconParamsT = {
  iconMOB: menu_btn_MOB,
  iconDT: menu_btn_DT,
  className: "",
  alt: "menu button",
};
const logo_btn: IconParamsT = {
  iconMOB: logo_MOB,
  iconDT: logo_DT,
  className: "",
  alt: "logo button",
};
const notification_btn: IconParamsT = {
  iconMOB: notification_true_MOB,
  iconDT: notification_true_DT,
  className: "",
  alt: "notification button",
};

const tabs = [
  {
    text: "Лотереи",
  },
  {
    text: "Акции",
  },
  {
    text: "Кошелек",
  },
  {
    text: "Мои билеты",
  },
  {
    text: "Архив тиражей",
  },
  {
    text: "Проверка билета",
  },
];

export default function Navbar() {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const curLang = "kz";

  return (
    <nav>
      <div className="container">
        <div className="left_side">
          <button
            onClick={() => setPopUpOpen(!isPopUpOpen)}
            className="menu_mob_btn"
            type="button"
          >
            <Responsive_icon {...menu_btn} />
          </button>
          <a href="https://sz.kz" className="logo_btn" type="button">
            <Responsive_icon {...logo_btn} />
          </a>
          <p className="desc">Национальная лотерея</p>
        </div>
        <div
          className="nav_pop_up"
          style={{ display: `${isPopUpOpen ? "flex" : "none"}` }}
        >
          {tabs.map((tab) => (
            <a key={tab.text}>{tab.text}</a>
          ))}
        </div>
        <div className="right_side">
          <button className="notification_btn" type="button">
            <Responsive_icon {...notification_btn} />
          </button>
          <button className="change_lang_btn" type="button">
            {curLang}
          </button>
          <button
            onClick={() => {
              setPopUpOpen(!isPopUpOpen);
              console.log(`hey`);
            }}
            className="menu_btn_DT"
            type="button"
          >
            <Responsive_icon {...menu_btn} />
          </button>
        </div>
      </div>
    </nav>
  );
}
