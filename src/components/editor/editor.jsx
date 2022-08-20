import React from "react";
import CardAddFrom from "../card_add_form/card_add_form";
import CardEditFrom from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard, updatedCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditFrom
        key={key}
        card={cards[key]}
        updatedCard={updatedCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddFrom onAdd={addCard} />
  </section>
);

export default Editor;
