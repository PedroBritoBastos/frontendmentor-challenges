import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext';

import './ActiveButton.css'

const ActiveButton = ({setActive, productInfo}) => {
  // inicia o contador com 1 produto
  const [count, setCount] = useState(1);

  // recupera a funcao para alterar o estado do cartContext
  const { productsList, setProductList } = useContext(CartContext);

  // state para indicar as informações do produto atual
  const [product, setProduct] = useState({name: "", count: 1, totalItemPrice: 0});

  // verifica a quantidade do produto toda vez que atualiza o count, e se for 0, o estado ativo é encerrado
  useEffect(() => {
    if(count < 1) {
      setCount(1);
      setActive(false);
    } else {
      if(count === 1) { // insere o produto na lista quando tiver pelo menos 1
        setProduct({
          name: productInfo.productName,
          count: 1,
          totalItemPrice: productInfo.productPrice
        })
        console.log("Produto: ")
        console.log(product)
        setProductList(productsList.push(product));
      }
    }
  }, [count]);

  // decrementa o contador
  const decrement = () => {
    console.log("qdt: " + product.count)
    setCount(count - 1);
  }

  // incrementa o contador
  const increment = () => {
    console.log("qdt: " + product.count)
    setCount(count + 1);
  }

  return (
    <>
      <div className="addToCard activeButton">
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default ActiveButton