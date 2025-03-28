import './CartItem.css'

const CartItem = () => {
  return (
    <>
      <li className="cartItem">
        <p className="cartItemName bold">Nome</p>
        <p className="cartItemPrice"><span className="cartItemQuantity">1x</span> @$valorunit $valortotal</p>
      </li>
    </>
  )
}

export default CartItem