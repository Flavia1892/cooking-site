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
import ContainerChickenCategory from "./Pages/ChickenCategoryPage.js";
import ContainerDessert from "./Pages/ContainerDessert.js";
import RecipePage from "./Pages/RecipePage.js";
import PageNotFound from "./Components/PageNotFound.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/morerecipespages" element={<MoreRecipesPage />} />
      <Route path="/beef" element={<ContainerBeefCategory />} />
      <Route path="/chicken" element={<ContainerChickenCategory />} />
      <Route path="/desserts" element={<ContainerDessert />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/recipepage/:id" element={<RecipePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
