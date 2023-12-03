import { single_accordion_Type } from "../../types/singleAccortion";
import Accordion_item from "../Accordion_item/Accordion_item";
import Message_box from "../Message_box/Message_box";
import "./FAQ.scss";

const accordion_data: single_accordion_Type[] = [
  {
    question:
      "Нужно ли регистрировать билеты для участия беспроигрышном тираже?",
    answer: "Для участия в беспроигрышном тираже регистрация не требуется.",
  },
  {
    question: "Как получить выигрыш?",
    answer:
      "Вам необходимо обраться в контакт-центр по тел. 8 800 080 52 00, где вам подскажут, где получить выигрыш и какие документы необходимы для оформления.",
  },
  {
    question: "Какой срок востребования выигрыша?",
    answer:
      "Срок востребования выигрыша - 180 дней с момента проведения тиража.",
  },
  {
    question: `Можно ли оплатить лотерейный билет и бонусами и деньгами`,
    answer:
      "Покупку лотерейного билета можно оплатить либо бонусами, либо деньгами.",
  },
  {
    question: "Будет ли беспроигрышный тираж, если выиграют Суперприз?",
    answer: "Да, беспроигрышный тираж будет проведен.",
  },
];

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq_container">
        <Message_box text="Часто задаваемые вопросы:" />
        <div className="accordion_container">
          {accordion_data.map((data, i) => (
            <Accordion_item key={data.answer} {...data} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
