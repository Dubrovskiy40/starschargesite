import {
  Cards,
  Header,
  Feedback,
  Puzzle,
  SwiperParallax,
  MapContainer,
  ScrollButton,
  Footer,
} from "../../components";
import MenuStore from "../../store/MenuStore";
import { useEffect, useState } from "react";
import Team from "../../components/Team/Team";
import Table from "../../components/Table/Table";
import { getCardUtilityClass } from "@mui/material";

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
      {itemslocal.map((menuItem, menuItemIndex) => {
        return menuItem.sections.map((sectionItem, sectionItemIndex) =>
        (sectionItem.section_type_id == 1
          ? <Puzzle menuName={itemslocal[menuItemIndex].name}
            cardsList={sectionItem.cards} />
          : (sectionItem.section_type_id == 2
            ? <Cards menuName={itemslocal[menuItemIndex].name}
              cardsList={sectionItem.cards} />
            : <Table menuName={itemslocal[menuItemIndex].name}
              cardsList={sectionItem.cards} />)))

      })}
      <Feedback />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
