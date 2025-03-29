
// icons
import addToCart from '../../assets/images/icon-add-to-cart.svg'

import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const AddButton = ({setActive, createProduct}) => {

  const {productList, setProductList } = useContext(CartContext);

  // altera o estado para o card como ativado ou desativado
  const handleClick = () => {
    const list = [].concat(productList); // cria um array novo
    list.push( createProduct() ); // insere o novo produto no array
    setProductList(list); // atualiza a lista
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