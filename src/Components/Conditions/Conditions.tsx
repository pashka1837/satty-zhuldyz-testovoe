import message_box_sm_icon from "../../assets/message_box_sm_icon.svg";
import bullet_icon from "../../assets/bullet_icon.svg";
import { conditionsArType } from "../../types/conditionsArType";

bullet_icon;
import "./Conditions.scss";
import Message_box from "../Message_box/Message_box";

const conditionsAr: conditionsArType = [
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
      <div className="container_conditions">
        {/* <div
          className="conditions_icon"
          style={{
            backgroundImage: `url(${message_box_sm_icon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1>Условия акции:</h1>
        </div> */}
        <Message_box text="Условия акции:" icon={message_box_sm_icon} />
        <div className="conditions_text">
          <div className="condtions_list">
            {conditionsAr.map((obj) => (
              <div className="condtions_list_item">
                <img src={bullet_icon} alt="Bullet icon" />
                <p>{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="conditions_btn_container">
        <button className="conditions_buy_btn" type="button">
          Купить билет
        </button>
      </div>
    </section>
  );
}

{
  /* <ul className="condtions_list">
            {conditionsAr.map((obj) => (
              <li>
                <p>{obj.text}</p>
              </li>
            ))}
          </ul> */
}
