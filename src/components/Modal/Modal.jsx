import OrderConfirmedIcon from '../../assets/images/icon-order-confirmed.svg';
import { Box, Presence } from '@chakra-ui/react';
import ModalItem from './ModalItem';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import {CartContext} from '../../context/CartContext';
import './ModalItemList.css'
import './Modal.css'

const Modal = () => {
  const {totalOrder} = useContext(ModalContext);
  const {productList} = useContext(CartContext);
  const modalItems = productList.map((product) => 
    <ModalItem 
      count={product.count} 
      name={product.productName}
      price={product.productPrice}
      itemTotal={Number(product.productPrice) * product.count}
      key={Math.random() * 4}
    />
  )
  
  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <>
      <Box maxWidth='30em' padding='2em' backgroundColor='hsl(0, 0%, 100%)' borderRadius='15px' md={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}  >
        <img src={OrderConfirmedIcon} alt="confimedIcon" />
        <h1 className='title-big bold color-dark'>Order Confirmed</h1>
        <p className='modalText'>We hope you enjoy your food!</p>

        <Box marginTop='2em'>
          <ul className='itemBackground modalItemList'>
            {modalItems}
          </ul>
        </Box>
          
        <Box display='flex' justifyContent='space-between' marginTop='2em' alignItems='center'>
          <p>Order total</p>
          <p className='bold modalTotalOrder'>$ {totalOrder}</p>
        </Box>

        <Box display='flex' justifyContent='center' marginTop='2em'>
          <button className='buttonBackgroundOrange modalStartNewButton' onClick={reloadPage}>
            Start new order
          </button>
        </Box>
      </Box>
    </>
  )
}

export default Modal