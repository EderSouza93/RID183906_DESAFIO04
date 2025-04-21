import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import {
  ContactInfo,
  Container,
  Content,
  Copyright,
  Email,
  SocialLink,
  SocialLinks,
  Title,
} from './styles';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <ContactInfo>
          <Title> Meu Contato:</Title>
          <Email>
            <FaEnvelope />
            <span>ederdev.93@gmail.com</span>
          </Email>
        </ContactInfo>

        <SocialLinks>
          <SocialLink
            href="https://github.com/EderSouza93"
            target="_blank"
            rel="Github"
            aria-label="Github"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/ederaldo-souza-ribeiro-b518b773/"
            target="_blank"
            rel="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://eder-souza-dev.vercel.app/"
            target="_blank"
            rel="Site Oficial"
            aria-label="Site Oficial"
          >
            <GoBrowser />
          </SocialLink>
        </SocialLinks>
      </Content>

      <Copyright>
        © {new Date().getFullYear()} Eder Souza. Todos os direitos reservados.
      </Copyright>
    </Container>
  );
};
