import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "yen",
      company: "baiada",
      theme: "colorful",
      title: "kfc",
      email: "yen@gmail.com",
      message: "fighting",
      fileName: "yennie",
      fileURL: null,
    },
    {
      id: "2",
      name: "julie",
      company: "baiada",
      theme: "light",
      title: "marination",
      email: "mj@gmail.com",
      message: "fighting",
      fileName: "julie",
      fileURL: null,
    },
    {
      id: "3",
      name: "leah",
      company: "baiada",
      theme: "dark",
      title: "wing",
      email: "ay@gmail.com",
      message: "fighting",
      fileName: "leah",
      fileURL: null,
    },
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
