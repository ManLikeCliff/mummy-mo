import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  width: 100vw;
`

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: bold;
`

export const SocialH2 = styled.h2`
  font-size: 1.5rem;

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`

export const SocialP = styled.p`
  font-size: .75rem;
  margin-bottom: 1rem;
  font-weight: normal;

  @media screen and (max-width: 400px) {
    font-size: .65rem;
    font-weight: normal;
    align-self: center;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;

  &:hover {
    color: #fdc500;
  }
`