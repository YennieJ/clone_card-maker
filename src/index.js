import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
//App.jsx가 아니라 index.js 에서 전달 하는 이유
//imageUploader의 props가 많아지면 너무 많은 props가 전달 되기 떄문에 함수로 만들어 놓으면 여기서만 전달해주면 되니까.

const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
//const FileInput = <ImageFileInput imageUploader ={imageUploader} /> 를 안하는 이유는?
//onClick 이라던지 다른 props를 전달 할 수 없기 때문에,

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
