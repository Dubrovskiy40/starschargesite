import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/";
import MapContainer from "./components/MapContainer/MapContainer";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
