import Style from "./table.module.scss";

const Table = () => {
  const textOfCardTable = [
    {
      id: "1",
      imgPath: "https://envybox.io/blog/wp-content/uploads/2020/11/01.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
    },
    {
      id: "2",
      imgPath: "https://envybox.io/blog/wp-content/uploads/2020/11/01.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
    },
    {
      id: "3",
      imgPath: "https://envybox.io/blog/wp-content/uploads/2020/11/01.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
    },
    {
      id: "4",
      imgPath: "https://envybox.io/blog/wp-content/uploads/2020/11/01.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
    },
    {
      id: "5",
      imgPath: "https://envybox.io/blog/wp-content/uploads/2020/11/01.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
    },
    {
      id: "6",
      imgPath: "https://envybox.io/blog/wp-content/uploads/2020/11/01.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
    },
  ];

  return (
    <section className="table">
      <div className="container">
        <ul className={Style.tableGrid}>
          {textOfCardTable?.map((content) => {
            return (
              <a className={Style.cell} key={content.id} href="https://www.asus.com/ru/" target="_blank" rel="noreferrer">
                <img
                  className={Style.img}
                  src={content.imgPath}
                  alt="product img"
                ></img>
                <h3 className={Style.title}>{content.title}</h3>
                <p className={Style.paragraph}>{content.paragraph}</p>
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
