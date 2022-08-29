import Style from "./table.module.scss";

const Table = (props) => {

  return (
    <section id={props.menuName} className="table">
      <div className="container">
        <ul className={Style.tableGrid}>
          {props.cardsList?.map((content) => {
            return (
              <a className={Style.cell} key={content.id} href="https://www.asus.com/ru/" target="_blank" rel="noreferrer">
                <img
                  className={Style.img}
                  src={content.imgPath}
                  alt="product img"
                ></img>
                <h3 className={Style.title}>{content.header}</h3>
                <p className={Style.paragraph}>{content.text}</p>
                <button className={Style.button}>Подробнее</button>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Table;
