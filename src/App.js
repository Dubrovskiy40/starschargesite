import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/";

import Cards from "./components/Cards/Cards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      {/*<Route path="/" element={<Home />} />*/}
    </Routes>
  );
}

export default App;
