import Button from '../Button/Button'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext/ShoppingCartContext'
import './product-card.styles.scss'

export default function ProductCard({product}) {
    const {name, price, imageUrl} = product
    const {addItemToCart}= useContext(ShoppingCartContext)

    const addProductToCart = ()=>{
      addItemToCart(product)
    }

    
  return ( 
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="price">{name}</span>
            <span className="name">$ {price}</span>
        </div>
        <Button buttonType='inverted'onClick={addProductToCart  } >Add to Cart</Button>
    </div>
  )
}
