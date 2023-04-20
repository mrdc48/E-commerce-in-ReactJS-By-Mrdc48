import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./CategoriesPreview.component";
import Category from "./Category";
export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
