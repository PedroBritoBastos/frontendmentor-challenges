
// icons
import addToCart from '../../assets/images/icon-add-to-cart.svg'


const AddButton = ({setActive}) => {

  // altera o estado para o card como ativado ou desativado
  const handleClick = () => {
    setActive(true);
  }

  return (
    <>
      <button className="addToCard" onClick={handleClick}>
        <img src={addToCart} alt="icon" />
        <p className="addToCardTitle">Add to card</p>
      </button>
    </>
  )
}

export default AddButton