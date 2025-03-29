import carbonNeutralIcon from '../../assets/images/icon-carbon-neutral.svg';

import { Box } from '@chakra-ui/react';

import './Cart.css'

const Cart = ({children}) => {
  return (
    <div className='lightBackground cart'>
      <h1 className='title-big cartTitle bold'>Your Cart</h1>

      {children}
       
      <Box display='flex' justifyContent='space-around' alignItems='center' padding='1em 0 2em 0'>
        <p className='cartOrderTotal bold'>Order Total</p>
        <p className='cartTotalPrice'>$total</p>
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