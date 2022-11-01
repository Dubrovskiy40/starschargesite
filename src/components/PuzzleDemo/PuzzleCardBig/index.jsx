import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

const PuzzleCardBig = (props) => {
  const { i18n } = useTranslation();
  let lang = i18n.language;
  const { img, header, header_eng, text, text_eng, date, path_link } = props;

  if (Object.keys(props).length === 0) return null;

  return (
    <div className={`${styles.container} ${path_link ? styles.hover : ""}`}>
      <img className={styles.image} src={`/static/media/${img}`} alt="img" />
      {path_link && (
        <a
          href={path_link}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {lang === "ru" ? header : header_eng}
        </a>
      )}
      <div className={styles.textContent}>
        <h3 className={styles.title}>{lang === "ru" ? header : header_eng}</h3>
        <p className={styles.text}>{lang === "ru" ? text : text_eng}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default PuzzleCardBig;
