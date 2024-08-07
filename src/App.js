import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import MoreRecipesPage from "./Pages/MoreRecipesPage.js";
import Layout from "./Components/Layout.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/morerecipespages" element={<MoreRecipesPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
