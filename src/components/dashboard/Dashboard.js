import React, { useEffect, useState } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../header/Header';
import "./Dashboard.css";
import { useDispatch ,useSelector} from 'react-redux';
import { Add } from '../../redux/actions/Action';
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import SliderBar from '../slider/SliderBar';

  
function Dashboard() {
  const singleProducts = useSelector((state) => state.cartReducer.carts) 
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data)
    })
  }, [])


  const addToCart = (item) => {
    item.quantity = 1;
 
    let restrict = singleProducts.find((val) => {
      return val.id === item.id
    })

    if (restrict) {
      toast("Alreday added");
    }
    else {
      dispatch(Add(item))
      toast("Your Items Is Has Been Added sucessfully" );
    }
  }


  return (
    <>
      <div>
        <Header />
        <SliderBar/>
        <div className='row'>
       
          {data.map((val) => {
            return <>
              <div className='col-lg-3'>
            
                <Card style={{ width: '18rem  mt-5' }} className="card" >
                 
                  <NavLink to={`/cart/${val.id}`}>
                    <Card.Img variant="top" src={val.image} style={{ height: "15rem" }} className="mt-3" />
                  </NavLink>

                  <Card.Body>
                    <Card.Title className='titles'>{val.title.substring(0, 20)}</Card.Title>
                    <h1 className='Price'>  ₹ {val.price}</h1>
                    <h1>{val.category}</h1>
                    <Card.Text className='text'>
                      Some quick example text to build.
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer>
                    <Button variant="primary" onClick={() => addToCart(val)} className="btnAddToCart">Add To Cart</Button>
                  </Card.Footer>
                
                </Card>
               
                <ToastContainer/>
     
              </div> 
            </>
          })}
          
        </div>

      </div>
     
    </>
  )
}

export default Dashboard