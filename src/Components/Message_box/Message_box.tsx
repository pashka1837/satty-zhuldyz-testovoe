import "./Message_box.scss";

export default function Message_box({
  text,
  icon,
}: {
  text: string;
  icon: string;
}) {
  return (
    <div
      className="message_box_container"
      style={{
        backgroundImage: `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}
