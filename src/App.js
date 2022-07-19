import { Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feedback />} />
    </Routes>
  );
}

export default App;
