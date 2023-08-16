import Button from '../Button/Button'
import './product-card.styles.scss'

export default function ProductCard({product}) {
    const {name, price, imageUrl} = product
    
  return ( 
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="price">{name}</span>
            <span className="name">{price} $</span>
        </div>
        <Button buttonType='inverted'>Add to Cart</Button>
    </div>
  )
}
