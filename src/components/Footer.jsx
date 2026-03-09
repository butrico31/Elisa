import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const WA_LINK = 'https://wa.me/5519981281661';
const INSTAGRAM = 'https://www.instagram.com/psicologaelisapereira';
const FACEBOOK = 'https://www.facebook.com/psicologaelisapereira';

/* ── Styled Components ── */
const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkMoss};
  color: rgba(245,239,230,0.8);
  padding: 4rem 1.5rem 2rem;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 3rem;
  }
`;

const BrandCol = styled.div``;

const FooterLogoName = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.beige};
  letter-spacing: 0.01em;
`;

const FooterLogoTitle = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.sage};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const FooterLogoImg = styled.img`
  height: 52px;
  width: auto;
  margin-bottom: 0.5rem;
  display: block;
  opacity: 0.9;
`;

const Tagline = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(245,239,230,0.65);
  margin-bottom: 1.5rem;
  max-width: 280px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  a {
    color: ${({ theme }) => theme.colors.sage};
    transition: color 0.3s, transform 0.3s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${({ theme }) => theme.colors.gold};
      transform: translateY(-2px);
    }
  }
`;

const NavCol = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.sage};
    margin-bottom: 1.2rem;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    li, a {
      font-size: 0.9rem;
      color: rgba(245,239,230,0.7);
      text-decoration: none;
      transition: color 0.3s;
      &:hover { color: ${({ theme }) => theme.colors.beige}; }
    }
  }
`;

const ContactCol = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.sage};
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
    color: rgba(245,239,230,0.7);
    a {
      color: rgba(245,239,230,0.7);
      text-decoration: none;
      transition: color 0.3s;
      &:hover { color: ${({ theme }) => theme.colors.beige}; }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(122,158,126,0.2);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  p {
    font-size: 0.8rem;
    color: rgba(245,239,230,0.45);
    a {
      color: ${({ theme }) => theme.colors.sage};
      text-decoration: none;
      transition: color 0.3s;
      &:hover { color: ${({ theme }) => theme.colors.gold}; }
    }
  }
`;

/* ── Component ── */
export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <BrandCol>
          <FooterLogoImg src="/LOGO-01-1536x911.png" alt="Elisa Pereira Psicóloga" />
          <Tagline>Cuidando da sua saúde mental com atenção integrada: corpo, mente e alma.</Tagline>
          <SocialRow>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
          </SocialRow>
        </BrandCol>

        <NavCol>
          <h4>Páginas</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre Mim</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </NavCol>

        <NavCol>
          <h4>Serviços</h4>
          <ul>
            <li>Consulta Psicológica</li>
            <li>Palestras</li>
            <li>Grupos de Vivência</li>
            <li>Cursos Online</li>
            <li>Lives Terapêuticas</li>
          </ul>
        </NavCol>

        <ContactCol>
          <h4>Contato</h4>
          <p><a href={WA_LINK} target="_blank" rel="noopener noreferrer">+55 19 98128-1661</a></p>
          <p><a href="mailto:elisascognamiglio@uol.com.br">elisascognamiglio@uol.com.br</a></p>
          <p>Vinhedo, São Paulo — SP</p>
        </ContactCol>
      </FooterInner>

      <FooterBottom>
        <p>© {new Date().getFullYear()} Elisa Pereira Psicóloga | Todos os direitos reservados</p>
        <p>Criado por{' '}<a href="https://www.imersa.com.br" target="_blank" rel="noopener noreferrer">Imersa</a></p>
      </FooterBottom>
    </FooterWrapper>
  );
}



