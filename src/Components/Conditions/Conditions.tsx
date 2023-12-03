import bullet_icon from "../../assets/bullet_icon.svg";
import { listDataType } from "../../types/conditions";

import "./Conditions.scss";
import Message_box from "../Message_box/Message_box";
import ListItem from "../ListItem/ListItem";

const conditionsAr: listDataType[] = [
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
              <ListItem icon={bullet_icon} text={obj.text} />
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
