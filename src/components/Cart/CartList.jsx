import CartItem from "./CartItem"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartList.css'

const CartList = () => {
  const {productList} = useContext(CartContext);

  const cartItems = productList.map((product) => <CartItem key={Math.random() * 3} 
    info={{
      productName: product.productName, 
      count: product.count, 
      productPrice: product.productPrice}
    }/>)

  return (
    <>
      <ul className="cartList">
        {cartItems}
      </ul>
    </>
  )
}

export default CartList