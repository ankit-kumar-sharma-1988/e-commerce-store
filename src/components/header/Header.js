import React, { useState } from 'react'
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';



function Header() {

  const cartData = useSelector((state) => state.cartReducer.carts)
  let navigate = useNavigate()



  function logOut(){
    navigate("/")
   localStorage.clear();
  }
  return (
    <>
      <div>
        <Navbar className='navbar'>
          <Container>
            <NavLink to="/dashboard" className="text-decoration-none text-light mx-3"><span className='headerHeading1'>Flipkart</span>  </NavLink>
            <Nav className="me-auto">
              <NavLink to="/dashboard" className="text-decoration-none text-light" > <span className='headerHeading2'>Home</span> </NavLink>
            </Nav>


            <NavLink to="/cart_product">
              <Badge badgeContent={cartData.length} color="primary" style={{ cursor: "pointer" }} >
                <MailIcon color="action" />
                <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}>
                </i>
              </Badge>
            </NavLink>

          
            {/* <NavLink className="text-decoration-none text-light mx-3"><span className='headerHeading1'>Logout </span>  </NavLink> */}

            <NavLink to={"/"} onClick={logOut}>

            <i className='fa fa-sign-out' ><span className='logoutbtn'>logout</span>   </i>
            {/* <i class="fas fa-user"></i> */}
            </NavLink>
          
          </Container>
        </Navbar>

        {/* <SliderBar/> */}

        {/* <img src={shoppingImage} width="1220px" height="350px"/> */}

        
      </div>
    </>
  )
}

export default Header
