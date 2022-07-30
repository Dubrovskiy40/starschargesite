import { Cards, Header, Feedback, Foter, ScrollButton } from "../../components";
import MapContainer from "../../components/MapContainer/MapContainer";

function Home() {
  return (
    <>
      <Header />
      <Cards />
      {/* <Feedback /> */}
      <MapContainer />
      <Foter />
      <ScrollButton />
    </>
  );
}

export default Home;
