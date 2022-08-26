import {
  Cards,
  Header,
  Feedback,
  SwiperLine,
  SwiperParallax,
  MapContainer,
  ScrollButton,
  Footer,
} from "../../components";
import MenuStore from "../../store/MenuStore";
import { useEffect, useState } from "react";
import Team from "../../components/Team/Team";
import Table from "../../components/Table/Table"

function Home() {
  const [itemslocal, setItemsLocal] = useState([]);

  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await MenuStore.fetchMenuItems().then(
        setItemsLocal(MenuStore.items.map((item) => item.name))
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    setAds([
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
    ]);
  }, []);
  //const itemslocal = ;
  
  return (
    <>
      <Header />
      <SwiperLine menuName={itemslocal[0]} />
      <SwiperParallax menuName={itemslocal[1]} />
      <Cards menuName={itemslocal[2]} />
      <Team />
      <Table cards={ads}/>
      <MapContainer menuName={itemslocal[3]} />
      <Feedback />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
