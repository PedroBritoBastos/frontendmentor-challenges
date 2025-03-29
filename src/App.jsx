// components
import DessertsTable from './components/DessertsTable/DessertsTable'
import DessertCard from './components/DessertCard/DessertCard'
import Cart from './components/Cart/Cart.jsx';
import CartList from './components/Cart/CartList.jsx';

// hooks
import { useState } from 'react';

// Chackra
import { Box } from '@chakra-ui/react'

// data
import {foods} from './data/foods.js';

import './App.css'

function App() {
  const cards = foods.map((food) => <DessertCard key={Math.random() * 2} image={food.image} category={food.category} name={food.name} price={food.price}/>)
  
  const [active, setActive] = useState(false);

  return (
    <>
      <Box display='flex' flexDirection='column' md={{flexDirection: 'row', gap: '2em', padding: '3em 4em'}}>
        <DessertsTable>
          {cards}
        </DessertsTable>
   
        <Cart>
          <CartList/>
        </Cart>
      </Box>
    </>
  )
}

export default App
