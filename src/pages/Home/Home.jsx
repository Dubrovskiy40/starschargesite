import { useEffect, useState } from "react";
import MenuStore from "../../store/MenuStore";
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
      <div className="content-container">
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
        <MapContainer />
        <AppDescription />
        <Team />
        <Feedback />
        <ScrollButton />
      </div>
      <Footer />
    </>
  );
}

export default Home;
