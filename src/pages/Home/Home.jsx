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

function Home() {
  const [itemslocal, setItemsLocal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await MenuStore.fetchMenuItems().then(); // запрос на динамические пункты меню

      setItemsLocal(MenuStore.items.map((item) => item.name));
    };
    fetchData();
  }, []);

  //const itemslocal = ;

  return (
    <>
      <Header />
      <SwiperLine menuName={itemslocal[0]} />
      <MapContainer menuName={itemslocal[1]} />
      <SwiperParallax />
      <Cards menuName={itemslocal[2]} />
      <Feedback menuName={itemslocal[3]} />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
