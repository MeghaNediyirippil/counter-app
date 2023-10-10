import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <MDBNavbar light bgColor='danger'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light'>
            <img className='me-2'
              src='https://cdn.dribbble.com/users/491923/screenshots/1815379/black-flip.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            COUNTER APP
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  )
}

export default Header