import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import MoreRecipesPage from "./Pages/MoreRecipesPage.js";
import Layout from "./Components/Layout.js";
import ContainerBeefCategory from "./Pages/ContainerBeefCategory.js";
import RecipePage from "./Pages/RecipePage.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/morerecipespages" element={<MoreRecipesPage />} />
      <Route path="/beefpages" element={<ContainerBeefCategory />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/recipepage" element={<RecipePage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
