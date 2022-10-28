import styles from "./styles.module.scss";

const PuzzleCardSmall = (props) => {
  const { imgPath, header, text, date } = props;

  if (Object.keys(props).length === 0) return null;

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`/static/media/${imgPath}`}
        alt="img"
      />
      <a
        href="https://www.asus.com/ru/"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        {header}
      </a>
      <div className={styles.textContent}>
        <h3 className={styles.title}>{header}</h3>
        <p className={styles.text}>{text}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default PuzzleCardSmall;
