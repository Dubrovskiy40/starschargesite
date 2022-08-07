import {
  Cards,
  Header,
  Carousel,
  Feedback,
  SwiperLine,
  SwiperParallax,
  MapContainer,
  ScrollButton,
  Footer,
} from "../../components";

function Home() {
  return (
    <>
      <Header />
      <section id="b1" />
      <SwiperLine />
      <section id="b2" />
      <Carousel />
      <SwiperParallax />
      <section id="b3" />
      <Cards />
      <section id="b4" />
      <MapContainer />
      <Feedback />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Home;
