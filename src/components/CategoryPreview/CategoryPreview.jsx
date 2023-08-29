import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import './category-preview.styles.scss'

export default function CategoryPreview({title, products}) {
  return (
    <div className="category-preview-container">
        <h2>
            <Link to={title} className="title">{title.toUpperCase()}</Link>
        </h2>
        <div className="preview">
            {
                products.filter((_, i)=> i<4)
                .map(product=><ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
  )
}
