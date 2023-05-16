import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <>
      <FooterContainer>
      <FooterText>
        Todos los derechos reservados © 2023 - Hecho con amor por{' '}
        <FooterLink href="https://www.example.com">mi empresa</FooterLink>.
      </FooterText>
      <FooterText>Enlaces útiles:</FooterText>
      <div>
        <FooterLink href="/nosotros">Nosotros</FooterLink>
        <FooterLink href="/servicios">Servicios</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/contacto">Contacto</FooterLink>
      </div>
      <FooterText>¡Síguenos en redes sociales!</FooterText>
      <SocialMediaIcons>
        <SocialMediaIcon href="https://www.facebook.com">
          <SocialMediaIconImg src="https://via.placeholder.com/30x30" alt="Facebook" />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.instagram.com">
          <SocialMediaIconImg src="https://via.placeholder.com/30x30" alt="Instagram" />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.twitter.com">
          <SocialMediaIconImg src="https://via.placeholder.com/30x30" alt="Twitter" />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.linkedin.com">
          <SocialMediaIconImg src="https://via.placeholder.com/30x30" alt="LinkedIn" />
        </SocialMediaIcon>
      </SocialMediaIcons>
    </FooterContainer>
    </>
  )
}

export default Footer
const FooterContainer = styled.footer`
  background-color: #4794cf;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1b1b1b;
    transform: translateY(-5px);
  }
`;

const SocialMediaIconImg = styled.img`
  width: 30px;
  height: 30px;
`;