import React, { useState, useEffect } from "react";
import { getImages } from "../../../service/unsplashService";
import { ItemsContainer } from "../../../styles/buyableItems";
import ImageBox from "./ImageBox";

const BuyableItems = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then(res => {
      setImages(res);
    });
  }, []);

  return (
    <ItemsContainer>
      {images &&
        images.map(image => (
          <ImageBox
            key={image.id}
            id={image.id}
            url={image.url}
            text={image.text}
          />
        ))}
    </ItemsContainer>
  );
};

export default BuyableItems;
