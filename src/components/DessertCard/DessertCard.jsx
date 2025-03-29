import { Box } from "@chakra-ui/react"
import { useState, useRef } from "react"
import AddButton from "../AddButton/AddButton"
import ActiveButton from "../ActiveButton/ActiveButton"
import './DessertCard.css'

const DessertCard = ({image, category, name, price}) => {

  const [active, setActive] = useState(false);

  // criando as referencias
  const dessertNameRef = useRef(null);
  const dessertPrice = useRef(null);

  const createProduct = () => {
    const productInfo = {
      productName: dessertNameRef.current.innerText,
      productPrice: dessertPrice.current.innerText.replace("$", "").trim(),
      count: 1
    }

    return productInfo;
  }
  
  return (
    <>
      <Box marginBottom={"4em"} >

        {/* imagem e add to Cart */}
        <div className="image-button">

          <img src={image} alt="imagem" className="foodImage"/>

          {active ? <ActiveButton setActive={setActive} createProduct={createProduct}/> : 
            <AddButton setActive={setActive} createProduct={createProduct}/>
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