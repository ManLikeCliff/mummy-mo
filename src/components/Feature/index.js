import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Lunch Pack of the Day</h1>
      <p>Jollof rice topped with fried plantain x turkey x snail</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature
