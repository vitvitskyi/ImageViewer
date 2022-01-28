import { useState } from "react";
import styles from "./accordion.module.css";

function Accordion({ label, data, isOpen, handleToggle, handleVar }) {
  const [active, setActive] = useState("");

  const handleLabelClick = () => {
    handleToggle(label);
    setActive("");
  };

  const handleVarClick = (name) => {
    setActive(name);
    handleVar(name);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.label} onClick={handleLabelClick}>
        {label}
      </div>
      <div
        className={`${styles.variants} ${!isOpen ? styles.hiddenVariants : ""}`}
      >
        {data.map((el) => (
          <div
            key={el.name}
            className={`${styles.variant} ${
              active === el.name ? styles.activeVar : ""
            }`}
            onClick={() => handleVarClick(el.name)}
          >
            <img src={el.img} alt={el.name} />
            <span className={styles.varName}>{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
