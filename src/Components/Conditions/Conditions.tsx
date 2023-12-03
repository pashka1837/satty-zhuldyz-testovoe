import conditions_BG_icon from "../../assets/conditions_BG_icon.svg";
import "./Conditions.scss";

export default function Conditions() {
  return (
    <section className="conditions">
      <div className="container_conditions">
        <div
          className="conditions_icon"
          style={{
            backgroundImage: `url(${conditions_BG_icon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <h1>Условия акции:</h1>
        </div>
      </div>
    </section>
  );
}
