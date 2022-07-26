import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/";
import {Cards} from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
    </Routes>
  );
}

export default App;
