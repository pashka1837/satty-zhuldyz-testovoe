import Message_box from "../Message_box/Message_box";
import exclamation_bullet_MOB from "../../assets/mobile/exclamation_bullet_MOB.svg";
import exclamation_bullet_DT from "../../assets/desktop/exclamation_bullet_DT.svg";

import "./Notation.scss";
import ListItem from "../ListItem/ListItem";
import { listDataType } from "../../types/listData";
import { IconParamsT } from "../../types/iconParamsT";

const notation_data: listDataType[] = [
  {
    text: "Согласно действующему законодательству РК, только совершеннолетние граждане имеют право на приобретение лотерейного билета.",
  },
  {
    text: "Участниками лотереи могут быть как резиденты, так и нерезиденты Республики Казахстан.",
  },
];

const bullet_icon_data: Omit<IconParamsT, "alt"> = {
  iconMOB: exclamation_bullet_MOB,
  iconDT: exclamation_bullet_DT,
  className: "",
};

export default function Notation() {
  return (
    <section className="notation">
      <div className="notation_container">
        <Message_box text="Это важно знать:" />
        <div className="notation_list">
          {notation_data.map((obj) => (
            <ListItem icon={bullet_icon_data} text={obj.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
