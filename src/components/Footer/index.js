import React from 'react'
import { FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialH2,
  SocialP,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialH2>Mummy Mo's</SocialH2>
              <SocialP>your mom next door...</SocialP>
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="WhatsApp"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </SocialIconLink>

              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
