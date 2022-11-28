import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./CartAddItem.css"
import Header from '../header/Header';
import { Delete } from '../../redux/actions/Action';
import { addQuantity } from '../../redux/actions/Action';
import { deleteQuantity } from '../../redux/actions/Action';


function CartAddItem() {
    const selectCartItems = useSelector((state) => state.cartReducer.carts)
    const [price, setPrice] = useState(0)
    const dispatch = useDispatch();
   

    function deleteHandler(e, index) {
        console.log(index, "ghj")
        dispatch(Delete(index))
    }

    function quantityIncrease(item) {
        dispatch(addQuantity(item))
    }

    function quantityDecrease(item) {
        console.log(item, "itttttttttttt")
        if (item.quantity <= 0) {
            alert("last unit")
        }
        else {
            dispatch(deleteQuantity(item))
        }
    }
    const total = () => {
        let price = 0;
        let qut = 0;
        selectCartItems.map((ele) => {
            price = (ele.price * ele.quantity) + price
        })
        setPrice(price)
    }
    
    useEffect(() => {
        total()
    }, [selectCartItems])



    return (
        <>
            <Header />

            
            <div className='CartAddItemMainDiv'>

                {selectCartItems.map((item, index) => {
                    return (
                        <div >

                            <div className='d-flex'>
                                <img src={item.image} style={{ width: "150px", height: "50" }} />
                                <table>

                                    <tr>
                                        <h3>  <strong className='Product'> ProductName</strong> : {item.title}</h3>
                                    </tr>
                                    <tr>
                                        <h3>  <strong className='Product'> Quantity</strong> : {item.quantity}</h3>
                                    </tr>

                                    <tr>
                                        <h3>  <strong className='price'>Price</strong> :${item.price}</h3>
                                    </tr>
                                    <tr>
                                        <h3>  <strong className='price'>Total Price</strong> :${item.price * item.quantity}</h3>
                                    </tr>
                                   


                                </table>
                                <div className='footers'>

                                    <button onClick={() => quantityIncrease(item)} className="plus">+</button>
                                    <input value={item.quantity} className='inputs' />
                                    <button onClick={() => quantityDecrease(item)}  >-</button>
                                   
                                    <i class="fa-solid fa-trash" onClick={(e) => deleteHandler(e, index)}></i>


                                </div>
                            </div>

                        </div>
                    )
                })}
<div className='total'>
<p className='Totalprice'>Total:{ Math.trunc(price)}
               
                </p>
</div>
                
            </div>





        </>
    )
}

export default CartAddItem