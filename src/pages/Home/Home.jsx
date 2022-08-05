import {
  Cards,
  Header,
  Puzzle,
  Carousel,
  Feedback,
  SwiperLine,
} from "../../components";

function Home() {
  return (
    <>
      <Header />
      <SwiperLine />
      <Cards />
      {/* <Carousel /> */}
      <SwiperParallax />
      <Puzzle />
      <MapContainer />
      <Feedback />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
