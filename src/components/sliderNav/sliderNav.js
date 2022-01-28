import { useState } from "react";

import Accordion from "../accordion/accordion";
import { thumbs } from "../../img-data";

import styles from "./sliderNav.module.css";

function SliderNav({ handleVar }) {
  const [openedAccordion, setOpenedAccordion] = useState("grey");

  const handleToggle = (accordion) => {
    setOpenedAccordion(accordion);
  };

  return (
    <div className={styles.wrapper}>
      {Object.keys(thumbs).map((el) => (
        <Accordion
          label={el}
          data={thumbs[el]}
          key={el}
          isOpen={openedAccordion === el}
          handleToggle={handleToggle}
          handleVar={handleVar}
        />
      ))}
    </div>
  );
}

export default SliderNav;
