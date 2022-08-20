import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onclick }) => (
  <button className={styles.button} onclick={onclick}>
    {name}
  </button>
);

export default Button;
