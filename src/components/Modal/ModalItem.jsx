import { foods } from "../../data/foods"
import { Box } from "@chakra-ui/react"
import './ModalItem.css'

const ModalItem = ({count, name, price, itemTotal}) => {
  const index = foods.findIndex((food) => food.name === name);

  return (
    <>
      <li className="modalItem itemBackground">
        <Box>
          <Box display='flex' gap='1em'>
            <img src={foods[index].image} alt="" className="modalImage"/>
            <Box>
              <p className="dessertName bold">{name}</p> 
              <Box display='flex' gap='1em'>
                <p className="dessertPrice bold">{count}x</p>
                <p>@${price}</p>
              </Box>
            </Box>
          </Box>
        </Box>
        <p className="bold color-dark">${itemTotal}</p>
      </li>
    </>
  )
}

export default ModalItem