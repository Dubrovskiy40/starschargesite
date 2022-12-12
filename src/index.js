import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Loader } from "./components";

import "./scss/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loader />}>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </Suspense>
);
