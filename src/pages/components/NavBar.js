import React from 'react'
import styled from 'styled-components'
import './NavBar.css'



const NavBar = () => {

    

  return (
    <div className="navigationBar active" >
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
    </div>
  )
}

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