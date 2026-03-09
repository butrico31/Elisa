import styled, { css } from 'styled-components';

/* ── Container ── */
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;
`;

/* ── Section ── */
export const Section = styled.section`
  padding: 5rem 1.5rem;
  @media (min-width: 768px) { padding: 7rem 3rem; }
`;

/* ── Section Title ── */
export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  line-height: 1.15;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

/* ── Buttons ── */
const btnBase = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.transitions.default},
              color ${({ theme }) => theme.transitions.default},
              border-color ${({ theme }) => theme.transitions.default},
              transform 0.2s ease;
  &:hover { transform: translateY(-1px); }
`;

export const BtnPrimary = styled.a`
  ${btnBase}
  background-color: ${({ theme }) => theme.colors.moss};
  color: #fff;
  border-color: ${({ theme }) => theme.colors.moss};
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkMoss};
    border-color: ${({ theme }) => theme.colors.darkMoss};
  }
`;

export const BtnSecondary = styled.a`
  ${btnBase}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.moss};
  border-color: ${({ theme }) => theme.colors.moss};
  &:hover {
    background-color: ${({ theme }) => theme.colors.moss};
    color: #fff;
  }
`;

export const BtnWhite = styled.a`
  ${btnBase}
  background-color: #fff;
  color: ${({ theme }) => theme.colors.moss};
  border-color: #fff;
  &:hover {
    background-color: ${({ theme }) => theme.colors.beige};
    border-color: ${({ theme }) => theme.colors.beige};
  }
`;

/* ── Card ── */
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.offwhite};
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid rgba(122, 158, 126, 0.12);
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.default},
              transform ${({ theme }) => theme.transitions.default};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.soft};
    transform: translateY(-4px);
  }
`;
