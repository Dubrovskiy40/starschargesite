import { useEffect, useState } from "react";
import {
  Cards,
  Header,
  Feedback,
  Puzzle,
  SwiperParallax,
  ScrollButton,
  Footer,
  Team,
  Table,
  AppDescription,
  Statistics,
  MapContainer,
} from "../../components";
import MenuStore from "../../store/MenuStore";
import StationsStore from "../../store/StationsStore";

const API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const [itemslocal, setItemsLocal] = useState([]);
  const [stations, setStations] = useState([]);
  
  const fetchData = async () => {
    await MenuStore.fetchMenuItems();
    setItemsLocal(MenuStore.items.map((item) => item));
    await StationsStore.fetchStations();
    setStations(StationsStore.items.map((item) => item));
  };

  useEffect(() => {
    fetchData().then();
  }, []);

  return (
    <>
      <Header />
      <SwiperParallax />
      <Statistics />
      {itemslocal.map((menuItem, menuItemIndex) => {
        return menuItem.sections.map((sectionItem) => {
          return sectionItem.section_type_id === 1 ? (
            sectionItem.cards.length ? (
              <Puzzle
                key={sectionItem.section_type_id}
                menuName={itemslocal[menuItemIndex].name}
                cardsList={sectionItem.cards}
              />
            ) : null
          ) : sectionItem.section_type_id === 2 ? (
            sectionItem.cards.length ? (
              <Cards
                key={sectionItem.section_type_id}
                menuName={itemslocal[menuItemIndex].name}
                cardsList={sectionItem.cards}
              />
            ) : null
          ) : sectionItem.cards.length ? (
            <Table
              key={sectionItem.section_type_id}
              menuName={itemslocal[menuItemIndex].name}
              cardsList={sectionItem.cards}
            />
          ) : null;
        });
      })}
      <MapContainer stations={stations} apiKey={API_KEY} />
      <AppDescription />
      <Team />
      <Feedback />
      <ScrollButton />

      <Footer />
    </>
  );
}

export default Home;
