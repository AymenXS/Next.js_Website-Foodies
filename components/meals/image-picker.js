'use client';

import { useRef } from 'react';
import styles from './image-picker.module.css';

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();

  const handleClick = () => {
    imageInput.current.click();
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
