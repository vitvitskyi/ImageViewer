import { useState } from "react";
import { data } from "../../img-data";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import styles from "./sliderImg.module.css";

function SliderImg({ variant }) {
  const [pos, setPos] = useState(0);
  const [dragPos, setDragPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleDrag = (e) => {
    if (dragPos - e.clientX === 1) {
      setPos(pos === 22 ? 0 : pos + 1);
    } else if (dragPos - e.clientX === -1) {
      setPos(pos === 0 ? 22 : pos - 1);
    } else {
      setDragPos(e.clientX);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bigImg}>
        <img
          className={styles.img}
          src={data[variant][pos]}
          alt="img"
          onDrag={handleDrag}
          onClick={() => setIsOpen(true)}
        />
        <span className={styles.hintText}>
          Drag to rotate and click to zoom in
        </span>
      </div>
      <div className={styles.thumbs}>
        <img
          className={styles.thumbImg}
          src={data[variant][pos === 0 ? 21 : pos === 1 ? 22 : pos - 2]}
          onClick={() => setPos(pos === 0 ? 21 : pos === 1 ? 22 : pos - 2)}
          alt="img"
        />
        <img
          className={styles.thumbImg}
          src={data[variant][pos === 0 ? 22 : pos - 1]}
          onClick={() => setPos(pos === 0 ? 22 : pos - 1)}
          alt="img"
        />
        <img
          className={styles.thumbImg}
          src={data[variant][pos]}
          onClick={() => setPos(pos)}
          alt="img"
        />
        <img
          className={styles.thumbImg}
          src={data[variant][pos === 22 ? 0 : pos + 1]}
          onClick={() => setPos(pos === 22 ? 0 : pos + 1)}
          alt="img"
        />
        <img
          className={styles.thumbImg}
          src={data[variant][pos === 21 ? 0 : pos === 22 ? 1 : pos + 2]}
          onClick={() => setPos(pos === 21 ? 0 : pos === 22 ? 1 : pos + 2)}
          alt="img"
        />
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={data[variant][pos]}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default SliderImg;
