import {
  Cards,
  Header,
  Puzzle,
  // Carousel,
  Feedback,
  Footer,
  MapContainer,
  ScrollButton,
  SwiperParallax,
} from "../../components";

function Home() {
  return (
    <>
      <Header />
      {/* <Carousel /> */}
      <SwiperParallax />
      <Puzzle />
      <Cards />
      <MapContainer />
      <Feedback />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
