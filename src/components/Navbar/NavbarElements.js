import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
// import { FaPizzaSlice } from 'react-icons/fa'
import Mummy from '../../Mummy'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 20px;
    left: 25px;
    font-size: 1.5rem;
  }
`

export const NavIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-130%, 100%);
		font-weight: bold;
	}

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }

  p {
    font-weight: normal;
  }
`

export const Bars = styled(Mummy)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`
