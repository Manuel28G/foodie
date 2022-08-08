import { useState } from "react";
import { categories as dataCategories } from "../data/firebase/categories";

function useCategory() {
  const [categories, setCategories] = useState(dataCategories);

  return { categories };
}

export default useCategory;
