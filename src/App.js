import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Home } from "./pages/";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
