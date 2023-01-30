import Homepage from "./screens/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CategoriesPage from "./screens/categoriespage/CategoriesPage";
import { useEffect, useState } from "react";
import getCategories from "./services/getCategories";

function App() {
  const [categories, setCategories] = useState([])
  useEffect(() => {

    const updateCategories = async () => {
      let categories = await getCategories();
      categories = Array.from(categories)
      setCategories(categories);
    }
    updateCategories();

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage categories={categories} />} />
        <Route path="/categories/:categoryId" element={<CategoriesPage categories={categories} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
