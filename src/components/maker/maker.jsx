import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "yen",
      company: "baiada",
      theme: "colorful",
      title: "kfc",
      email: "yen@gmail.com",
      message: "fighting",
      fileName: null,
      fileURL: null,
    },
    2: {
      id: "2",
      name: "julie",
      company: "baiada",
      theme: "light",
      title: "marination",
      email: "mj@gmail.com",
      message: "fighting",
      fileName: null,
      fileURL: null,
    },
    3: {
      id: "3",
      name: "leah",
      company: "baiada",
      theme: "dark",
      title: "wing",
      email: "ay@gmail.com",
      message: "fighting",
      fileName: null,
      fileURL: null,
    },
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdatedCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      //delete 연산자
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdatedCard}
          updatedCard={createOrUpdatedCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
