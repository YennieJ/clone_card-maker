import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loding, setLoding] = useState(false);

  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  //UI를 위해 버튼을 클릭했을때 input type='file'을 클릭하기 위함

  const onChange = async (event) => {
    // console.log(event.target.files[0]);

    // imageUploader.upload(event.target.files[0])
    // .then(console.log)  async 아닐때
    setLoding(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    // console.log(uploaded); 아래하기전에 확인
    setLoding(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loding && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
      {loding && <div className={styles.loding}></div>}
    </div>
  );
};

export default ImageFileInput;
