import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/";
import Carousel from "./components/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import Feedback from "./components/Feedback/Feedback";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
