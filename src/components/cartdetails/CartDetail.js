import React, { useEffect, useState } from 'react'
import "./CartDetail.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../header/Header'
import Button from 'react-bootstrap/Button';
import { Add } from '../../redux/actions/Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CartDetail() {
  const allCartProducts = useSelector((state) => state.cartReducer.carts)
  const [productDetails, setProductDetails] = useState({})

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setProductDetails({...res.data , quantity : 1})
    })
  }, [])

  const addHandler = () => {

    let restrict = allCartProducts.find((val) => {
      return val.id === productDetails.id
    })

    if (restrict) {
      toast("Alreday added");
    }
    else {
      toast(" Your Product Is Sucessfully Added");

      dispatch(Add(productDetails))

    }

  }

  return (
    <>

      <Header />
      <div className='mainDiv'>
        <div className='d-flex'>
          <img src={productDetails?.image} style={{ width: "210px" }} className="image" />

          <div>

            <table className='tab'>
              <tr>
                <td className='ProductHeading'>Product Name:</td>
                <td className='titleHeading'>{productDetails.title}</td>
              </tr>

              <tr>
                <td className='ProductHeading'>Price:</td>
                <td className='priceHeading'>${productDetails.price}</td>
              </tr>

              <tr>
                <td className='ProductHeading'>Description:</td>
                <td className='ProductSerialno'>{productDetails.description}</td>
              </tr>

            </table>
          </div>
        </div>

      </div>

      <div className='btnDiv'>
        <Button variant="primary" onClick={() => addHandler()}
        
        >ADD</Button>{' '}

        <ToastContainer />
        
      </div>

    </>
  )
}

export default CartDetail;




