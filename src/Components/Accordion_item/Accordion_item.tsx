import { useState } from "react";
import open_accordion from "../../assets/open_accordion.svg";
import close_accordion from "../../assets/close_accordion.svg";
import "./Accordion_item.scss";
import { single_accordion_Type } from "../../types/singleAccortion";

export default function Accordion_item({
  question,
  answer,
  index,
}: single_accordion_Type) {
  const [isOpen, setOpen] = useState(index === 0 ? true : false);
  return (
    <div className="single_accordion">
      <div className="single_accordion_question">
        <p>{question}</p>
        <button
          className="single_accordion_btn"
          type="button"
          onClick={() => setOpen(!isOpen)}
        >
          <img
            src={isOpen ? close_accordion : open_accordion}
            alt={isOpen ? "Close Accordion" : "Open Accordion"}
          />
        </button>
      </div>
      {isOpen ? (
        <div className="single_accordion_answer">
          <p>{answer}</p>
        </div>
      ) : null}
    </div>
  );
}
