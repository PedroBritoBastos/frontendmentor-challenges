import carbonNeutralIcon from '../../assets/images/icon-carbon-neutral.svg';

import { Box } from '@chakra-ui/react';

import './Cart.css'

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { TfiBoltAlt } from 'react-icons/tfi';

const Cart = ({children}) => {
  const {productList} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;

    if(productList.length > 0) {
      productList.forEach((product) => {
        totalPrice += Number(product.productPrice) * product.count;
      })
    }

    setTotal(totalPrice);
  }, [productList])

  return (
    <div className='lightBackground cart'>
      <h1 className='title-big cartTitle bold'>Your Cart</h1>

      {children}
       
      <Box display='flex' justifyContent='space-around' alignItems='center' padding='1em 0 2em 0'>
        <p className='cartOrderTotal bold'>Order Total</p>
        <p className='cartTotalPrice'>${total}</p>
      </Box>
        
      <Box display='flex'  flexDirection='column' justifyContent='center' alignItems='center' gap='1.5em'>
        <div className='carbonNeutral itemBackground'>
          <img src={carbonNeutralIcon} alt="" />
          <p>This is a carbon-neutral delivery</p>
        </div>
        <button className='cartConfirmButton buttonBackgroundOrange'>
          Confirm order
        </button>
      </Box>
    </div>
  )
}

export default Cart