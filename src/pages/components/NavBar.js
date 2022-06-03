import React from 'react'
import styled from 'styled-components'


const NavBar = () => {
 
  return (
    <NavContainer>
        <h5>something</h5>
            <List  >
                <li>home</li>
                <li>features</li>
                <li>contact</li>
            </List>
        <div className='buttons' >
            <button className='btn btn-primary btn-sm me-2' >Sign Up</button>
            <button className='btn btn-light btn-sm me-2' >Log In</button>
        </div>
        <p>menu</p>
    </NavContainer>
  )
}

  
const NavContainer = styled.div`
color: black;
background-color: white;
padding-right: 10px ;
padding-left: 10px ;
z-index: 50;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
width: 100%;
position: fixed;
font-size: 2vw;
@media (max-width: 768px) {
  .buttons {
      
    display: none;
    visibility: hidden;
  }
  }

@media (max-width: 600px) {
  font-size: 3vw;
}



`

const List = styled.ul`
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    li {
		display: inline;
        margin-right: 5px ;
	}

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`
export default NavBar