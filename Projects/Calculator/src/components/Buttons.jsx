import styles from "./Buttons.module.css";

const Buttons = () => {
  const buttons = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];
  return (
    <div className={styles["buttons-container"]}>
      {buttons.map((btn, idx) => (
        <button
          key={`${btn}-${idx}`}
          type="button"
          className={styles["button"]}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
