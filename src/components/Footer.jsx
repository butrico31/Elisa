import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          <FooterLogoName>Elisa Pereira</FooterLogoName>
          <FooterLogoTitle>Psicóloga</FooterLogoTitle>
          <Tagline>Cuidando da sua saúde mental com atenção integrada: corpo, mente e alma.</Tagline>
          <SocialRow>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
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



