import generic_bullet from "../../assets/generic_bullet.svg";
import { listDataType } from "../../types/listData";

import "./Conditions.scss";
import Message_box from "../Message_box/Message_box";
import ListItem from "../ListItem/ListItem";
import { IconParamsT } from "../../types/iconParamsT";

const conditionsAr: listDataType[] = [
  {
    text: "Купите билет SuperLoto на 229 тираж, 8 ноября.",
  },
  {
    text: "Больше билетов, больше выигрышей!",
  },
];

const bullet_icon_data: Omit<IconParamsT, "alt"> = {
  iconMOB: generic_bullet,
  iconDT: generic_bullet,
  className: "",
};

export default function Conditions() {
  return (
    <section className="conditions">
      <div className="conditions_container">
        <Message_box text="Условия акции:" />
        <div className="conditions_text">
          <div className="condtions_list">
            {conditionsAr.map((obj) => (
              <ListItem
                key={obj.text}
                icon={bullet_icon_data}
                text={obj.text}
              />
            ))}
          </div>
        </div>
        <div className="conditions_btn_container">
          <a href="https://sz.kz" className="conditions_buy_btn" type="button">
            Купить билет
          </a>
        </div>
      </div>
    </section>
  );
}
