import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import gsap from 'gsap';

const WA_LINK = 'https://wa.me/5519981281661';

/* ── Styled Components ── */
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 1.5rem;
  transition: background-color 0.4s, box-shadow 0.4s, padding 0.4s;
  background-color: ${({ $scrolled }) => $scrolled ? 'rgba(250,248,245,0.97)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(12px)' : 'none'};
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 2px 20px rgba(74,103,65,0.08)' : 'none'};
  ${({ $scrolled }) => $scrolled && css`padding: 0.8rem 1.5rem;`}
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  flex-shrink: 0;
`;

const LogoName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.35rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  letter-spacing: 0.01em;
`;

const LogoTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.moss};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const NavLinks = styled.nav`
  display: none;
  gap: 2rem;
  margin-left: auto;
  @media (min-width: 900px) { display: flex; }
`;

const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.02em;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s;
  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1px;
    background-color: ${({ theme }) => theme.colors.sage};
    transition: width 0.3s ease;
  }
  &:hover, &.active {
    color: ${({ theme }) => theme.colors.moss};
    &::after { width: 100%; }
  }
`;

const CtaButton = styled.a`
  display: none;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.moss};
  color: #fff;
  padding: 0.65rem 1.4rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.moss};
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;
  &:hover { background-color: ${({ theme }) => theme.colors.darkMoss}; }
  @media (min-width: 900px) { display: inline-flex; }
`;

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;
  cursor: pointer;
  z-index: 1001;
  @media (min-width: 900px) { display: none; }
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.darkMoss};
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center;
  }
  ${({ $open }) => $open && css`
    span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
  `}
`;

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.offwhite};
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 999;
`;

const MobileLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkMoss};
  text-decoration: none;
  transition: color 0.3s;
  &:hover, &.active { color: ${({ theme }) => theme.colors.sage}; }
`;

const MobileCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.moss};
  color: #fff;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.moss};
  margin-top: 1rem;
  text-decoration: none;
`;

/* ── Component ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.set(menuRef.current, { display: 'flex' });
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      gsap.fromTo(linksRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0, y: -10, duration: 0.3, ease: 'power3.in',
        onComplete: () => gsap.set(menuRef.current, { display: 'none' }),
      });
    }
  }, [menuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/servicos', label: 'Serviços' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <Header $scrolled={scrolled}>
      <Inner>
        <LogoLink to="/">
          <LogoName>Elisa Pereira</LogoName>
          <LogoTitle>Psicóloga</LogoTitle>
        </LogoLink>

        <NavLinks>
          {navLinks.map(({ to, label }) => (
            <StyledNavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </StyledNavLink>
          ))}
        </NavLinks>

        <CtaButton href={WA_LINK} target="_blank" rel="noopener noreferrer">
          Agendar Consulta
        </CtaButton>

        <Hamburger $open={menuOpen} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </Hamburger>
      </Inner>

      <MobileMenu ref={menuRef}>
        {navLinks.map(({ to, label }, i) => (
          <MobileLink key={to} to={to} end={to === '/'}
            ref={el => (linksRef.current[i] = el)}
            className={({ isActive }) => isActive ? 'active' : ''}>
            {label}
          </MobileLink>
        ))}
        <MobileCta href={WA_LINK} target="_blank" rel="noopener noreferrer"
          ref={el => (linksRef.current[navLinks.length] = el)}>
          Agendar Consulta
        </MobileCta>
      </MobileMenu>
    </Header>
  );
}



