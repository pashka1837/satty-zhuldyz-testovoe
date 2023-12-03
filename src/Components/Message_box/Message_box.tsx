import "./Message_box.scss";

export default function Message_box({ text }: { text: string; icon?: string }) {
  return (
    <div className="message_box_container">
      <h1>{text}</h1>
    </div>
  );
}
