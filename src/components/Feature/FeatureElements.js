import styled from 'styled-components'
import FeaturePic from '../../images/feature-1.jpg'

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  width: 100vw;
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 1.5rem);
  }

  @media screen and (max-width: 480px) {
    max-height: 300px;
    background-size: cover;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.75rem 2rem;
    align-self: center;
  }
`
