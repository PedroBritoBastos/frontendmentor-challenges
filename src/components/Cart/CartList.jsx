import CartItem from "./CartItem"

import './CartList.css'

const CartList = () => {
  return (
    <>
      <ul className="cartList">
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </ul>
    </>
  )
}

export default CartList