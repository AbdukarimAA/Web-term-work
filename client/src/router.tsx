import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import App from "./components/App/App";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<App />} path={"/"} />
      <Route element={<Login />} path={"/authorize"} />
      <Route element={<Register />} path={"/register"} />
    </Route>
  )
);

export default router;
