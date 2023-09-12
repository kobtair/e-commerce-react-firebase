import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

import {CategoryPreviewContainer, Title, Preview} from '../../components/CategoryPreview/category-preview.styles'

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <CategoryPreviewContainer >
      <h2>
        <Title >{category.toUpperCase()}</Title>
      </h2>
      <Preview style={{ rowGap: '20px'}}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
