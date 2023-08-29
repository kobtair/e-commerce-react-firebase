import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <div className="category-preview-container" >
      <h2>
        <span className="title" >{category.toUpperCase()}</span>
      </h2>
      <div className="preview" style={{ rowGap: '20px'}}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
