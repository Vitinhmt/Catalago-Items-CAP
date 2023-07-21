import { useState } from "react";

const ImageValidator = ({ Codigo, Nome }) => {
  const [imgURL, setImgURL] = useState("");
  const [error, setError] = useState(false);

  const img = `https://raw.githubusercontent.com/Vitinhmt/Cat-logo/master/${Codigo}.png`;
  const notFoundImg =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png";

  function handleError() {
    setError(true);
  }
  return (
    <img
      src={error ? notFoundImg : imgURL || img}
      alt={Nome}
      onError={handleError}
      onLoad={() => setImgURL(img)}
    />
  );
};

export default ImageValidator;
