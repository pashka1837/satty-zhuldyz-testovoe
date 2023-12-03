import { listItemType } from "../../types/listItem";
import Responsive_icon from "../Responsive_icon/Responsive_icon";
import "./ListItem.scss";

export default function ListItem({ icon, text }: listItemType) {
  console.log(icon);
  return (
    <div className="list_item">
      <Responsive_icon {...icon} alt="bullet icon" />
      <p>{text}</p>
    </div>
  );
}
