import style from "./style.module.scss";

const NotFound = () => {
  return (
    <div className={style.container}>
      <h2>
        404 - страница <span>не найдена!</span>
      </h2>
    </div>
  );
};

export default NotFound;
