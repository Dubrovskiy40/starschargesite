import { useEffect, useState } from "react";
import {
  Cards,
  Header,
  Feedback,
  SwiperParallax,
  ScrollButton,
  Footer,
  Team,
  Table,
  AppDescription,
  Statistics,
  MapContainer,
} from "../../components";
import PuzzleDemo from "../../components/PuzzleDemo";
import MenuStore from "../../store/MenuStore";
import StationsStore from "../../store/StationsStore";
import SettingsStore from "../../store/SettingsStore";
import Partners from "../../components/Partners/Partners";

const API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const [itemslocal, setItemsLocal] = useState([]);
  const [stations, setStations] = useState([]);
  const [statistics, setStatistics] = useState([]);

  const fetchData = async () => {
    await MenuStore.fetchMenuItems();
    setItemsLocal(MenuStore.items.map((item) => item));
    await StationsStore.fetchStations();
    setStations(StationsStore.items.map((item) => item));
    await SettingsStore.fetchSettings();
    setStatistics(SettingsStore.items);
  };

  useEffect(() => {
    fetchData().then();
  }, []);

  return (
    <>
      <Header />
      <SwiperParallax />
      <Statistics stationsCount={stations.length} statistics={statistics} />
      {itemslocal.map((menuItem, menuItemIndex) => {
        return menuItem.sections.map((sectionItem) => {
          return sectionItem.section_type_id === 1 ? (
            sectionItem.cards.length ? (
              <PuzzleDemo
                cards={sectionItem.cards}
                menuName={itemslocal[menuItemIndex].name}
                key={sectionItem.section_type_id}
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
      <Partners />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
