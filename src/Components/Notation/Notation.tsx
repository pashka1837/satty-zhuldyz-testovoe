import Message_box from "../Message_box/Message_box";
import exclamation_mob from "../../assets/mobile/exclamation_mob.svg";
import "./Notation.scss";
import ListItem from "../ListItem/ListItem";
import { listDataType } from "../../types/conditions";

const notation_data: listDataType[] = [
  {
    text: "Согласно действующему законодательству РК, только совершеннолетние граждане имеют право на приобретение лотерейного билета.",
  },
  {
    text: "Участниками лотереи могут быть как резиденты, так и нерезиденты Республики Казахстан.",
  },
];

export default function Notation() {
  return (
    <section className="notation">
      <div className="notation_container">
        <Message_box text="Это важно знать:" />
        <div className="notation_list">
          {notation_data.map((obj) => (
            <ListItem icon={exclamation_mob} text={obj.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
