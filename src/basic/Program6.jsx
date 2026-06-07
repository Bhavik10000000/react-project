import React from 'react'
import "../App.css"
import { BsArrowLeft } from 'react-icons/bs';


const Program6= ({onBack}) => {
  let discountPercentage = 18
let originalPrice = 10000
let itemName = "Block1"

function calculateDiscount(originalPrice, discountPercentage){
    let discountPrice = originalPrice - (originalPrice * (discountPercentage/100))
    return discountPrice
}

function displayDiscount(itemName, originalPrice, discountPercentage){
    console.log(`Item : ${itemName}`)
    console.log(`Original Price : ${originalPrice}rs`)
    console.log(`Discount Percentage : ${discountPercentage}%`)
    console.log(`Discounted Price : ${calculateDiscount(originalPrice, discountPercentage)}rs`)
}

displayDiscount(itemName, originalPrice, discountPercentage)
      return (
        <div>
          <span className='span1'>
          <button onClick={onBack} className='backButton'><BsArrowLeft size={20} /></button>
          <h3 className='heading3'>Program6</h3>
          </span>
           <div className='programs-body'>
            <h3>Open Console</h3>
            <br/>
            <p>Item : {itemName}<br/>Original Price : {originalPrice}rs<br/>Discount Percentage : {discountPercentage}%<br/>Discounted Price : {calculateDiscount(originalPrice, discountPercentage)}rs</p>
          
          <br/>
            <p className='note'>Note : This values are retrived from Console.</p>
          </div>
        </div>
      )
    }
export default Program6