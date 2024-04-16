import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'

export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext)
  return (
   <div className="cartitems">
    <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>remove</p>
    </div>
    <hr/>
   {all_product.map((e)=>{
    if(cartItems[e.id]>0){
        return  <div>
        <div className="cartitems-format cartitems-format-main">
            <img src={e.image} className='carticon-product-icon' alt="" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-qauntity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img src={remove_icon} className='cartitems-remove-icon' onClick={()=>removeFromCart(e.id)} alt="" />
        </div>
        </div>
    }
    return null

   })}
<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <p>Shipping Free</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <p>Total</p>
                <p>${getTotalCartAmount()}</p>
            </div>
        </div>
        <button>Proceed To Check </button>
    </div>

    <div className="cartitems-promocode">
        <p>if you have promode , Enter it here</p>
        <div className="cartitems-promobox">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
        </div>
    </div>
</div>


   </div>
  )
}