import React from 'react'
import styled from 'styled-components'



const NavBar = () => {
  return (
    <NavContainer>
        <h5>something</h5>
            <List>
                <li>home</li>
                <li>features</li>
                <li>contact</li>
            </List>
        <div>
            <button className='btn btn-primary btn-sm me-2' >Sign Up</button>
            <button className='btn btn-light btn-sm me-2' >Log In</button>
        </div>
    </NavContainer>
  )
}
const NavContainer = styled.div`
    padding-right: 10px ;
    padding-left: 10px ;
    z-index: 50;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: rgb(0, 0, 0, 0);
    color: white;
    width: 100%;
    position: fixed;
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
`
export default NavBar