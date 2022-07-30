import { Cards, Header, Feedback, Footer, ScrollButton } from "../../components";
import MapContainer from "../../components/MapContainer/MapContainer";

function Home() {
  return (
    <>
      <Header />
      <Cards />
      {/* <Feedback /> */}
      <MapContainer />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default Home;
