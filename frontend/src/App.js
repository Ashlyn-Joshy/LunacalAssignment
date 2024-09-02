import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./Pages/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
