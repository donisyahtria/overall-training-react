import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/index";
import UpComing from "./components/Movie/UpComing.jsx";
import Popular from "./components/Movie/Popular.jsx";
import NP from "./components/Movie/NowPlaying.jsx";
import Detail from "./components/Movie/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "up_coming", element: <UpComing /> },
      { path: "popular", element: <Popular /> },
      { path: "now_playing", element: <NP /> },
      { path: "popular/:id", element: <Detail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
