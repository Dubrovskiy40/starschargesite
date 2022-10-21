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

const API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const [itemslocal, setItemsLocal] = useState([]);
  const fetchData = async () => {
    await MenuStore.fetchMenuItems();
    setItemsLocal(MenuStore.items.map((item) => item));
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
        return menuItem.sections.map((sectionItem) =>
          sectionItem.section_type_id === 1 ? (
            <Puzzle
              menuName={itemslocal[menuItemIndex].name}
              cardsList={sectionItem.cards}
            />
          ) : sectionItem.section_type_id === 2 ? (
            <Cards
              menuName={itemslocal[menuItemIndex].name}
              cardsList={sectionItem.cards}
            />
          ) : (
            <Table
              menuName={itemslocal[menuItemIndex].name}
              cardsList={sectionItem.cards}
            />
          )
        );
      })}
      <MapContainer apiKey={API_KEY} />
      <AppDescription />
      <Team />
      <Feedback />
      <ScrollButton />

      <Footer />
    </>
  );
}

export default Home;
