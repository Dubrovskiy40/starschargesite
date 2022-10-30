import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

const PuzzleCardSmall = (props) => {
  const { i18n } = useTranslation();
  let lang = i18n.language;
  
  const { img, header, header_eng, text, text_eng, date } = props;

  if (Object.keys(props).length === 0) return null;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={`/static/media/${img}`} alt="img" />
      <a
        href="https://www.asus.com/ru/"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        {lang === 'ru'
          ? header
          : header_eng
        }
      </a>
      <div className={styles.textContent}>
        <h3 className={styles.title}>
          {lang === 'ru'
            ? header
            : header_eng
          }
        </h3>
        <p className={styles.text}>
          {lang === 'ru'
            ? text
            : text_eng
          }
        </p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default PuzzleCardSmall;
