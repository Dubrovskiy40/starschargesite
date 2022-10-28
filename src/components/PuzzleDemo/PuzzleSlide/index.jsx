import styles from "./styles.module.scss";

const PuzzleSlide = ({ slots }) => {
  const [slot1, slot2, slot3, slot4, slot5] = slots;

  return (
    <div className={styles.slidesContainer}>
      <div className={styles.slot_1}>{slot1}</div>
      <div className={styles.slot_2}>{slot2}</div>
      <div className={styles.slot_3}>{slot3}</div>
      <div className={styles.slot_4}>{slot4}</div>
      <div className={styles.slot_5}>{slot5}</div>
    </div>
  );
};

export default PuzzleSlide;
