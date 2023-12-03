import bullet_icon from "../../assets/bullet_icon.svg";
import { conditionsArType } from "../../types/conditionsArType";

bullet_icon;
import "./Conditions.scss";
import Message_box from "../Message_box/Message_box";

const conditionsAr: conditionsArType = [
  {
    text: "Купите билет SuperLoto на 229 тираж, 8 ноября.",
  },
  {
    text: "Больше билетов, больше выигрышей!",
  },
];

export default function Conditions() {
  return (
    <section className="conditions">
      <div className="conditions_container">
        <Message_box text="Условия акции:" />
        <div className="conditions_text">
          <div className="condtions_list">
            {conditionsAr.map((obj) => (
              <div className="condtions_list_item">
                <img src={bullet_icon} alt="Bullet icon" />
                <p>{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="conditions_btn_container">
          <button className="conditions_buy_btn" type="button">
            Купить билет
          </button>
        </div>
      </div>
    </section>
  );
}
