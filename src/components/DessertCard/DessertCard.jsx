import { Box, Button } from "@chakra-ui/react"

// hooks
import { useContext, useState, useRef } from "react"

// style
import './DessertCard.css'

// components
import AddButton from "../AddButton/AddButton"
import ActiveButton from "../ActiveButton/ActiveButton"


const DessertCard = ({image, category, name, price}) => {

  const [active, setActive] = useState(false);

  // criando as referencias
  const dessertNameRef = useRef(null);
  const dessertPrice = useRef(null);

  return (
    <>
      <Box marginBottom={"4em"} >

        {/* imagem e add to Cart */}
        <div className="image-button">

          <img src={image} alt="imagem" className="foodImage"/>

          {active ? <ActiveButton setActive={setActive} productInfo={{
                productName: dessertNameRef.current.textContent,
                productPrice: dessertPrice.current.textContent
          }}/> : 
            <AddButton setActive={setActive} />
          }
          
        </div>

        {/* information */}
        <div className="information-container">
          <p className="dessertCategory">{category}</p>
          <p className="dessertName" ref={dessertNameRef}>{name}</p>
          <p className="dessertPrice" ref={dessertPrice}>$ {price}</p>
        </div>
      </Box>
    </>
  )
}

export default DessertCard