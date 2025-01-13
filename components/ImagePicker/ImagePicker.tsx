'use client';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './ImagePicker.module.scss';

export default function ImagePicker({
  label,
  name,
}: {
  label: any;
  name: any;
}) {
  const [pickedImage, setPickedImage] = useState<any>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  function handleClickBtn() {
    // console.log(imageInputRef.current);
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }
  function handleChangeImage(event: any) {
    const file = event.target.files[0];
    // console.log(file);

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div>
      ImagePicker
      <label htmlFor={name}>{label}</label>
      <div>
        <div className={styles.preview}>
          {!pickedImage && <p>No images now</p>}
          {pickedImage && (
            <Image src={pickedImage} fill alt="Image selected by user" />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          // multiple
          required
          onChange={handleChangeImage}
        />
        <button type="button" onClick={handleClickBtn}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
