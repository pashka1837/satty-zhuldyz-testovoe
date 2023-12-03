import "./ListItem.scss";

type listItemType = {
  icon: string;
  text: string;
};

export default function ListItem({ icon, text }: listItemType) {
  return (
    <div className="list_item">
      <img src={icon} alt="Bullet icon" />
      <p>{text}</p>
    </div>
  );
}
