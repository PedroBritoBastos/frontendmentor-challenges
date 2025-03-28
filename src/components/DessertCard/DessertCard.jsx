import { Box, Button } from "@chakra-ui/react"



// style
import './DessertCard.css'

// components
import AddButton from "../AddButton/AddButton"

const DessertCard = ({image, category, name, price}) => {

  return (
    <>
      <Box marginBottom={"4em"} >

        {/* imagem e add to Cart */}
        <div className="image-button">

          <img src={image} alt="imagem" className="foodImage"/>

          <AddButton/>
        </div>

        {/* information */}
        <div className="information-container">
          <p className="dessertCategory">{category}</p>
          <p className="dessertName">{name}</p>
          <p className="dessertPrice">$ {price}</p>
        </div>
      </Box>
    </>
  )
}

export default DessertCard