import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import App from "./components/App/App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route element={<App />} path={"/"} />
      <Route element={} path={"/authorize"} />
      <Route element={} path={"/register"} />
    </Routes>
  )
);

export default router;
