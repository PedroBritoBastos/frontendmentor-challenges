import { Box } from "@chakra-ui/react"

// importing styles
import { defaultStyle, smallStyle } from "./Styles"
import './DessertsTable.css'

const DessertsTable = ({children}) => {
  return (
    <div>
      <h1 className="dessertsTableTitle bold title-big">Desserts</h1>
      <Box {...defaultStyle} sm={smallStyle} lg={{gridTemplateColumns: "repeat(3, 1fr)"}}>
        {children}
      </Box>
    </div>
  )
}

export default DessertsTable