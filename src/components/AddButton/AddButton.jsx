import React from 'react'

// icons
import addToCart from '../../assets/images/icon-add-to-cart.svg'

const AddButton = () => {
  return (
    <>
      <button className="addToCard">
        <img src={addToCart} alt="icon" />
        <p className="addToCardTitle">Add to card</p>
      </button>
    </>
  )
}

export default AddButton