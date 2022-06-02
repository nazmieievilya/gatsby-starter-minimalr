import React from 'react'
import styled from 'styled-components'
import "./NavBar.css"
import { useState, useEffect } from 'react'


const NavBar = () => {
    
    const [background,  setBackground] = useState(false)

   
    
    useEffect(() => {
        const changeBackground = () => {
            if(window.scrollY > 200) {
                setBackground(true)
            } else{
                setBackground(false)
            }
        }
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground)
      }, []);
    const backgroundClor = {
        color: "white",
        backgroundColor: "rgb(0, 0, 0, 0)",
        transition: "1s ease all"
    }
    const backgroundClorActive = {
        backgroundColor: "white",
        color: "black",
        transition: "1s ease all"
    }

    console.log(background)
    const NavContainer = styled.div`
    color: ${ background ? "black" : "white" };
    background-color: ${ background ? "white" : "transparant" };
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
`
  return (
    <NavContainer  >
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