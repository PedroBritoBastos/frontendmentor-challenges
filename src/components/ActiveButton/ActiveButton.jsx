import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import decrementIcon from '../../assets/images/icon-decrement-quantity.svg'
import incrementIcon from '../../assets/images/icon-increment-quantity.svg'
import './ActiveButton.css'

const ActiveButton = ({setActive, createProduct}) => {
  // inicia o contador com 1 produto
  const [count, setCount] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(createProduct());

  // recupera a funcao para alterar o estado do cartContext
  const { productList, setProductList } = useContext(CartContext);

  // verifica a quantidade do produto toda vez que atualiza o count, e se for 0, o estado ativo é encerrado
  useEffect(() => {
    if(count < 1) {
      setCount(1);

      const list = [].concat(productList);
      const index = list.findIndex(item => item.productName === currentProduct.productName);

      if (index !== -1) {
        list.splice(index, 1);
      }

      setProductList(list);
      setActive(false);
    } else {
      const list = [].concat(productList);
      list.map(item => (item.productName === currentProduct.productName) ? item.count = count : item);
      setProductList(list);
    }
  }, [count]);

  // decrementa o contador
  const decrement = () => {
    setCount(count - 1);
  }

  // incrementa o contador
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className="addToCard activeButton" style={{backgroundColor: 'hsl(14, 86%, 42%)'}}>
        <button onClick={decrement}>
          <img src={decrementIcon} alt="" />
        </button>
          <p>{count}</p>
        <button onClick={increment}>
          <img src={incrementIcon} alt="" />
        </button>
      </div>
    </>
  )
}

export default ActiveButton