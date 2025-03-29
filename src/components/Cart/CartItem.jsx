import './CartItem.css'

const CartItem = ({info}) => {
  return (
    <>
      {info && <li className="cartItem">
        <p className="cartItemName bold">{info.productName}</p>
        <p className="cartItemPrice"><span className="cartItemQuantity">{info.count}x</span> 
          <span className='cartItemProdPrice'>@${info.productPrice}</span> <span>${Number(info.productPrice) * info.count}</span>
        </p>
      </li> }
    </>
  )
}

export default CartItem