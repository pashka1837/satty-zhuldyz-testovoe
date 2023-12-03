import menu_mob_btn from "../../assets/menu_mob_btn.svg";
import logo_mob from "../../assets/logo_mob.svg";
import notification_true from "../../assets/notification_true.svg";

import "./Navbar.scss";

export default function Navbar() {
  const curLang = "kz";
  return (
    <nav>
      <div className="container">
        <div className="left_side">
          <button className="menu_mob_btn" type="button">
            <img src={menu_mob_btn} alt="Menu Button" />
          </button>
          <a href="https://sz.kz" className="logo_mob_btn" type="button">
            <img src={logo_mob} alt="Logo Button" />
          </a>
          <p className="desc">Национальная лотерея</p>
        </div>
        <div className="right_side">
          <button className="notification_btn" type="button">
            <img src={notification_true} alt="Notification Button" />
          </button>
          <button className="change_lang_btn" type="button">
            {curLang}
          </button>
        </div>
      </div>
    </nav>
  );
}
