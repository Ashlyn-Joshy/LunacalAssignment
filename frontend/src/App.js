import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
