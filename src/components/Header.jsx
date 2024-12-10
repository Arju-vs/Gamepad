// rafce
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar style={{zIndex:1,backgroundColor:'#2e055a'}} className="shadow position-fixed w-100">
        <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='d-flex fw-bolder align-items-center ' >
              <i style={{fontSize:'80px'}} className="text-white fa-solid fa-gamepad me-2"></i>
              <h2 style={{color:'#ffffff',fontSize:'30px',}}>GAME<span style={{color:'red'}}>PAD!</span></h2>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header