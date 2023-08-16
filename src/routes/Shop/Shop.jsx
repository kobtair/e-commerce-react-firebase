import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext/ShopContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './shop.styles.scss'

export default function Shop() {
    const {products} = useContext(ShopContext)
  return (
    <div className="products-container">
      {products.map((product)=>(
       <ProductCard key={product.id} product={product}  />
      ))}
    </div>
  );
}
