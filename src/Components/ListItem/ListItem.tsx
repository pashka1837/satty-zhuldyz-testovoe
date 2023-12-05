import { listItemType } from "../../types/listItem";
import Responsive_icon from "../Responsive_icon/Responsive_icon";
import "./ListItem.scss";

export default function ListItem({ icon, text }: listItemType) {
  const props = {
    ...icon,
    alt: "bullet icon",
  };
  return (
    <div className="list_item">
      <Responsive_icon {...props} ref={null} />
      <p>{text}</p>
    </div>
  );
}
