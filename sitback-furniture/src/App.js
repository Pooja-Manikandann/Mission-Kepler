import Homepage from "./screens/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CategoriesPage from "./screens/categoriespage/CategoriesPage";
import { useEffect, useState } from "react";
import getCategories from "./services/getCategories";
import OrderConfirmation from "./containers/order-confirmation/OrderConfirmation";
import Layout from "./containers/layout/Layout";
import { HOME, ORDER_CONFIRMATION, SHOPPING } from "./constants/PathConstants";

function App() {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("")
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [confirmedOrders, setConfirmedOrders] = useState([]);
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
      <Layout categories={categories} category={category} setCategory={setCategory} isLoading={isLoading}>
        <Routes>
          <Route path={HOME} element={<Homepage categories={categories} setCategory={setCategory} />} />
          <Route path={SHOPPING} element={<CategoriesPage setIsLoading={setIsLoading} cartItems={cartItems} setCartItems={setCartItems} wishListItems={wishListItems} setWishListItems={setWishListItems} setCategory={setCategory} category={category} setConfirmedOrders={setConfirmedOrders} />} />
          <Route path={ORDER_CONFIRMATION} element={<OrderConfirmation products={confirmedOrders} categories={categories} setCategory={setCategory} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
