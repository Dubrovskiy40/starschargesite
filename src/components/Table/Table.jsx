import Style from "./table.module.scss";

const Table = ({cards}) => {

  return (
    <section className="table">
      <div className="container">
        <ul className={Style.tableGrid}>
          {cards.map((card) => {
            return (
              <a className={Style.cell} key={card.id} href="https://www.asus.com/ru/" target="_blank" rel="noreferrer">
                <img
                  className={Style.img}
                  src={card.imgPath}
                  alt="product img"
                ></img>
                <h3 className={Style.title}>{card.title}</h3>
                <p className={Style.paragraph}>{card.paragraph}</p>
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
