import React, { useState, useEffect } from 'react';

const apiUrl = 'https://api.pavanmahadik.tk/getUnsplashCollection';
const previousImagesKey = 'previousImages';
const imageExpiresKey = 'imageExpiresAt';
const currentImageKey = 'currentImage';
const dayInMs = 1000 * 60 * 60 * 24;

const getPreviousImages = () => {
  let previousImages = localStorage.getItem(previousImagesKey);
  if (!previousImages) previousImages = [];
  else previousImages = JSON.parse(previousImages);
  return previousImages;
};

export default function BackgroundImage() {
  const currentImage = localStorage.getItem(currentImageKey);
  const imageExpiresAt = localStorage.getItem(imageExpiresKey);
  const [backgroundImage, setBackgroundImage] = useState(currentImage);

  document.querySelector('body').style.backgroundImage = `url(${backgroundImage})`;
  
  if (imageExpiresAt && Date.now() < imageExpiresAt) return null;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          const imageObject = res[i];
          const previousImages = getPreviousImages();
          if (!previousImages.includes(imageObject.image)) {
            setBackgroundImage(imageObject.image);
            previousImages.push(imageObject.image);
            localStorage.setItem(previousImagesKey, JSON.stringify(previousImages));
            localStorage.setItem(currentImageKey, imageObject.image);
            localStorage.setItem(imageExpiresKey, Date.now() + dayInMs);
            break;
          }
        }
      });
  }, []);

  return null;
}
