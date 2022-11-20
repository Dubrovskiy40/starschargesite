import { useEffect, useState } from "react";
import {
  // Cards,
  Header,
  Feedback,
  SwiperParallax,
  ScrollButton,
  Footer,
  Team,
  // Table,
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
  const [contacts, setContacts] = useState({});

  const fetchData = async () => {
    await MenuStore.fetchMenuItems();
    setItemsLocal(MenuStore.items.map((item) => item));
    await StationsStore.fetchStations();
    setStations(StationsStore.items.map((item) => item));
    await SettingsStore.fetchSettings();
    setStatistics(SettingsStore.items.statistics);
    setContacts(SettingsStore.items.contacts);
  };

  useEffect(() => {
    fetchData().then();
  }, []);

  return (
    <>
      <Header />
      <SwiperParallax />
      <Statistics stationsCount={stations.length} statistics={statistics} />
      {itemslocal.length && (
        <PuzzleDemo data={itemslocal?.find(({ id }) => id === 1)} />
      )}
      <MapContainer stations={stations} apiKey={API_KEY} />
      <AppDescription />
      <Team />
      <Feedback />
      <Partners />
      <ScrollButton />
      <Footer contacts={contacts} />
    </>
  );
}

export default Home;
