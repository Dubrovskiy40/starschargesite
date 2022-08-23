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

  useEffect(() => {
    const fetchData = async () => {
      await MenuStore.fetchMenuItems().then(
        setItemsLocal(MenuStore.items.map((item) => item.name))
      );
    };
    fetchData();
  }, []);

  //const itemslocal = ;

  return (
    <>
      <Header />
      <SwiperLine menuName={itemslocal[0]} />
      <SwiperParallax menuName={itemslocal[1]} />
      <Cards menuName={itemslocal[2]} />
      <Team />
      <Table />
      <MapContainer menuName={itemslocal[3]} />
      <Feedback />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
