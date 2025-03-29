import DessertsTable from './components/DessertsTable/DessertsTable'
import DessertCard from './components/DessertCard/DessertCard'
import Cart from './components/Cart/Cart.jsx';
import CartList from './components/Cart/CartList.jsx';
import Modal from './components/Modal/Modal.jsx';
import { useContext } from 'react';
import { Box } from '@chakra-ui/react'
import {foods} from './data/foods.js';
import { ModalContext } from './context/ModalContext.jsx';
import './App.css'

function App() {
  const cards = foods.map((food) => <DessertCard key={Math.random() * 2} image={food.image} category={food.category} name={food.name} price={food.price}/>)
  const {visible} = useContext(ModalContext);

  return (
    <>
      <Box position='relative' display='flex' flexDirection='column' md={{flexDirection: 'row', gap: '2em', padding: '3em 4em'}}>
        <DessertsTable>
          {cards}
        </DessertsTable>
   
        <Cart>
          <CartList/>
        </Cart>
        
        { visible && 
          <div className='overlay'>
            <Modal/>
          </div>
        }
        
      </Box>
    </>
  )
}

export default App
