import React from 'react'
import styled from 'styled-components'

const FeaturesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 700px;
    background-color: white;
    width: 100%;

`
const GridContainer = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
  .element {
    width: 400px;
    height: 400px;
    background-color: pink;

  }
  @media (max-width: 425px) {
    .element {
    width: 90vw;
    height: 90vw;
    margin: 5vw;
  }
  }

`
const Featuresgrid = () => {
  return (
    <FeaturesContainer>
       <GridContainer>
        <div className='element' >sdds</div>
        <div className='element' >sdds</div>
        <div className='element' >sdds</div>
       </GridContainer>
    </FeaturesContainer>
  )
}

export default Featuresgrid