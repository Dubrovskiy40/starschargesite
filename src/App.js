import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/";
import {Cards, Feedback} from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feedback />} />
    </Routes>
  );
}

export default App;
