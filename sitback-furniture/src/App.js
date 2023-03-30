import Homepage from "./screens/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CategoriesPage from "./screens/categoriespage/CategoriesPage";
import { useEffect, useState } from "react";
import getCategories from "./services/getCategories";
import OrderConfirmation from "./containers/order-confirmation/OrderConfirmation";
import Layout from "./containers/layout/Layout";
import { HOME, ORDER_CONFIRMATION, SHOPPING } from "./constants/PathConstants";
import PageNotFound from "./screens/page-not-found/PageNotFound";

function App() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {

    const updateCategories = async () => {
      let categories = await getCategories();
      categories = Array.from(categories)
      setCategories(categories);
      setIsLoading(false);
    }
    setIsLoading(true);
    updateCategories();

  }, [])

  return (
    <BrowserRouter>
      <Layout categories={categories} isLoading={isLoading}>
        <Routes>
          <Route path={HOME} element={<Homepage categories={categories} />} />
          <Route path={SHOPPING} element={<CategoriesPage setIsLoading={setIsLoading} />} />
          <Route path={ORDER_CONFIRMATION} element={<OrderConfirmation categories={categories} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
