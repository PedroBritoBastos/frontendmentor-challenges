import './CartItem.css'

const CartItem = ({info}) => {
  return (
    <>
      {info && <li className="cartItem">
        <p className="cartItemName bold">{info.productName}</p>
        <p className="cartItemPrice"><span className="cartItemQuantity">{info.count}x</span> 
          @${info.productPrice} ${Number(info.productPrice) * info.count}
        </p>
      </li> }
    </>
  )
}

export default CartItem