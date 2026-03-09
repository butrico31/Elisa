import { useEffect, useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BtnPrimary, Container, SectionTitle, SectionSubtitle } from '../styles/ui';
import { WaveDividerDown, WaveDividerUp, LeafDivider } from '../components/SvgDividers';

gsap.registerPlugin(ScrollTrigger);

const WA = 'https://wa.me/5519981281661';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Styled Components ── */
const HeroSection = styled.section`
  padding: 9rem 1.5rem 5rem;
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.beige} 0%, ${({ theme }) => theme.colors.offwhite} 100%);
  @media (min-width: 768px) { padding: 10rem 3rem 6rem; }
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  animation: ${fadeInUp} 0.9s 0.1s both;
  @media (min-width: 768px) { grid-template-columns: 1fr 1.1fr; }
`;

const HeroAvatar = styled.div`
  width: min(320px, 80vw);
  height: min(320px, 80vw);
  border-radius: 40% 60% 55% 45% / 45% 55% 45% 55%;
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.sage} 0%, ${({ theme }) => theme.colors.moss} 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 6rem;
  font-style: italic;
  color: rgba(255,255,255,0.25);
  flex-shrink: 0;
`;

const HeroText = styled.div``;

const HeroLabel = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.moss};
  margin-bottom: 0.75rem;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  line-height: 1.1;
  margin-bottom: 1.25rem;
`;

const HeroDesc = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 500px;
`;

/* ── Timeline ── */
const TimelineSection = styled.section`
  background-color: ${({ theme }) => theme.colors.offwhite};
  overflow: clip;
`;

const TimelinePinWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 1.5rem;
  overflow: hidden;
  @media (max-width: 767px) {
    height: auto;
    padding: 4rem 0 2.5rem;
    overflow: visible;
  }
`;

const TimelineHeading = styled.div`
  text-align: center;
  padding: 0 1.5rem;
  flex-shrink: 0;
`;

const TrackOuter = styled.div`
  overflow: hidden;
  width: 100%;
  flex-shrink: 0;
  position: relative;
  @media (max-width: 767px) {
    overflow-x: auto;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
  }
`;

/* The horizontal center line */
const CenterLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${({ theme }) => theme.colors.sage} 8%,
    ${({ theme }) => theme.colors.gold} 50%,
    ${({ theme }) => theme.colors.sage} 92%,
    transparent 100%
  );
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 0;
  @media (max-width: 767px) { display: none; }
`;

const TrackInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 5rem;
  will-change: transform;
  width: max-content;
  @media (max-width: 767px) {
    padding: 0 1.25rem;
    gap: 1rem;
  }
`;

/* Each item is a column of: top-half + dot + bottom-half */
const TimelineItem = styled.div`
  flex-shrink: 0;
  width: clamp(220px, 22vw, 320px);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: clamp(240px, 72vw, 300px);
    scroll-snap-align: center;
  }
`;

const TimelineHalf = styled.div`
  height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $top }) => $top ? 'flex-end' : 'flex-start'};
  width: 100%;
  padding: ${({ $top }) => $top ? '0 0.5rem 0' : '0 0.5rem'};
  @media (max-width: 767px) { height: 130px; }
`;

const TimelineDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.sage};
  border: 3px solid ${({ theme }) => theme.colors.offwhite};
  box-shadow: 0 0 0 3px rgba(122,158,126,0.3);
  flex-shrink: 0;
  z-index: 2;
  position: relative;
`;

const TimelineConnector = styled.div`
  width: 2px;
  height: 40px;
  flex-shrink: 0;
  background: linear-gradient(
    to ${({ $top }) => $top ? 'bottom' : 'top'},
    ${({ theme }) => theme.colors.sage},
    transparent
  );
`;

const TimelineCard = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 16px;
  padding: 1.25rem 1.3rem;
  border: 1px solid rgba(122,158,126,0.15);
  box-shadow: 0 4px 20px rgba(74,103,65,0.07);
  width: 100%;
`;

const TimelineYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gold};
  display: block;
  margin-bottom: 0.25rem;
`;

const TimelineText = styled.p`
  font-size: 0.87rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
`;

const ScrollHint = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.moss};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.65;
  @media (max-width: 767px) { display: none; }
`;

/* ── Especializações ── */
const SpecSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.beige};
  @media (min-width: 768px) { padding: 8rem 3rem; }
`;

const BadgesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const Badge = styled.span`
  background-color: rgba(122,158,126,0.15);
  border: 1px solid ${({ theme }) => theme.colors.sage};
  color: ${({ theme }) => theme.colors.moss};
  padding: 0.45rem 1.1rem;
  border-radius: 50px;
  font-size: 0.88rem;
  font-weight: 500;
`;

/* ── Abordagem ── */
const AboutSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.offwhite};
  @media (min-width: 768px) { padding: 8rem 3rem; }
`;

const AboutGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
`;

const AboutCard = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(122,158,126,0.1);
  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkMoss};
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 0.92rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.75;
  }
`;

/* ── Logo Section ── */
const LogoSection = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.beige};
  @media (min-width: 768px) { padding: 6rem 3rem; }
`;

const LogoInner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const LogoPlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.sage}, ${({ theme }) => theme.colors.gold});
  opacity: 0.4;
  margin: 0 auto 2rem;
`;

/* ── CTA ── */
const CtaSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.darkMoss};
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.beige};
  margin-bottom: 1rem;
`;

const CtaSub = styled.p`
  font-size: 1rem;
  color: rgba(245,239,230,0.9);
  margin-bottom: 2rem;
`;

/* ── Data ── */
const timelineData = [
  { year: '2000', text: 'Formação em Psicologia e início da atuação clínica.' },
  { year: '2005', text: 'Primeira especialização em Psicoterapia Corporal.' },
  { year: '2010', text: 'Abertura do consultório com foco em atendimento individualizado.' },
  { year: '2015', text: 'Segunda e terceira especializações em Psicoterapia Corporal.' },
  { year: '2023', text: 'Atualização em Terapia do Esquema e NR-1 (Riscos Psicossociais).' },
  { year: 'Hoje', text: 'Mais de 25 anos de experiência, atendendo online e presencial.' },
];

const specs = [
  'Psicoterapia Corporal — Spec. 1', 'Psicoterapia Corporal — Spec. 2', 'Psicoterapia Corporal — Spec. 3',
  'Terapia do Esquema', 'NR-1 — Riscos Psicossociais',
];

/* ── Component ── */
export default function About() {
  const timelineRef = useRef(null);
  const trackRef = useRef(null);
  const specsRef = useRef(null);
  const aboutGridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll timeline — desktop only
      if (timelineRef.current && trackRef.current && window.innerWidth >= 768) {
        const track = trackRef.current;
        gsap.to(track, {
          x: () => Math.min(0, -(track.scrollWidth - window.innerWidth)),
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top top',
            end: () => `+=${Math.max(track.scrollWidth - window.innerWidth, 1)}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
      // Specs badges
      if (specsRef.current) {
        gsap.fromTo(specsRef.current.querySelectorAll('span'),
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: specsRef.current, start: 'top 85%', once: true } }
        );
      }
      // About grid
      if (aboutGridRef.current) {
        gsap.fromTo(aboutGridRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: aboutGridRef.current, start: 'top 80%', once: true } }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <HeroSection>
        <Container>
          <HeroInner>
            <HeroAvatar>E</HeroAvatar>
            <HeroText>
              <HeroLabel>Psicóloga CRP Ativo</HeroLabel>
              <HeroTitle>Olá, eu sou a Elisa</HeroTitle>
              <HeroDesc>
                Sou psicóloga com 25 anos de experiência clínica, especialista em Psicoterapia Corporal
                com uma abordagem integrada de corpo, mente e alma. Atendo adolescentes, adultos,
                casais e grupos — online e presencialmente em Vinhedo, SP.
              </HeroDesc>
              <BtnPrimary href={WA} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </BtnPrimary>
            </HeroText>
          </HeroInner>
        </Container>
      </HeroSection>

      {/* TIMELINE */}
      <TimelineSection ref={timelineRef}>
        <TimelinePinWrap>
          <TimelineHeading>
            <SectionTitle style={{ marginBottom: '0.25rem' }}>Minha Trajetória</SectionTitle>
            <SectionSubtitle style={{ margin: '0 auto' }}>Mais de duas décadas dedicadas ao cuidado com a saúde mental.</SectionSubtitle>
          </TimelineHeading>
          <TrackOuter>
            <CenterLine />
            <TrackInner ref={trackRef}>
              {timelineData.map((item, i) => {
                const above = i % 2 === 0;
                return (
                  <TimelineItem key={i}>
                    <TimelineHalf $top>
                      {above && <TimelineCard><TimelineYear>{item.year}</TimelineYear><TimelineText>{item.text}</TimelineText></TimelineCard>}
                      {above && <TimelineConnector $top />}
                    </TimelineHalf>
                    <TimelineDot />
                    <TimelineHalf>
                      {!above && <TimelineConnector />}
                      {!above && <TimelineCard><TimelineYear>{item.year}</TimelineYear><TimelineText>{item.text}</TimelineText></TimelineCard>}
                    </TimelineHalf>
                  </TimelineItem>
                );
              })}
            </TrackInner>
          </TrackOuter>
          <ScrollHint>Scroll para avançar →</ScrollHint>
        </TimelinePinWrap>
      </TimelineSection>

      {/* ESPECIALIZATIONS */}
      <LeafDivider fill="#F5EFE6" bg="#FAF8F5" />
      <SpecSection>
        <Container>
          <SectionTitle>Especializações & Formações</SectionTitle>
          <SectionSubtitle>
            Formação sólida e atualização contínua para oferecer o melhor cuidado.
          </SectionSubtitle>
          <BadgesWrap ref={specsRef}>
            {specs.map((s, i) => <Badge key={i}>{s}</Badge>)}
          </BadgesWrap>
        </Container>
      </SpecSection>

      {/* ABORDAGEM */}
      <WaveDividerDown fill="#FAF8F5" bg="#F5EFE6" />
      <AboutSection>
        <Container>
          <SectionTitle>Minha Abordagem</SectionTitle>
          <SectionSubtitle>
            Cada pessoa é única. Por isso, ofereço um cuidado totalmente personalizado.
          </SectionSubtitle>
          <AboutGrid ref={aboutGridRef}>
            <AboutCard>
              <h3>🌿 Visão Integrada</h3>
              <p>
                A Psicoterapia Corporal compreende o ser humano em sua totalidade: corpo, mente e alma
                estão interligados. Trabalho com técnicas de relaxamento e consciência corporal que
                promovem transformações profundas e duradouras.
              </p>
            </AboutCard>
            <AboutCard>
              <h3>🧠 Evidência Científica</h3>
              <p>
                Minha prática é fundamentada em abordagens cientificamente validadas, como a
                Terapia do Esquema e protocolos de saúde ocupacional (NR-1). Combino rigor técnico
                com sensibilidade humana em cada atendimento.
              </p>
            </AboutCard>
            <AboutCard>
              <h3>❤️ Ética e Acolhimento</h3>
              <p>
                Atendo com ética, atenção e retorno consistente. Cada paciente recebe cuidado
                individualizado, dentro de um ambiente seguro, confidencial e acolhedor —
                seja online ou presencial.
              </p>
            </AboutCard>
            <AboutCard>
              <h3>✨ Espiritualidade Cristã</h3>
              <p>
                Integro, quando pertinente, a dimensão espiritual ao processo terapêutico.
                Minha espiritualidade cristã e católica ressoa com muitos pacientes que buscam
                segurança e apoio nessa dimensão.
              </p>
            </AboutCard>
          </AboutGrid>
        </Container>
      </AboutSection>

      {/* LOGO */}
      <LeafDivider fill="#F5EFE6" bg="#FAF8F5" />
      <LogoSection>
        <LogoInner>
          <LogoPlaceholder />
          <SectionTitle>O Significado do Meu Logo</SectionTitle>
          <SectionSubtitle style={{ margin: '0 auto', textAlign: 'center' }}>
            Meu logo representa a integração entre corpo, mente e alma — as três dimensões que
            guiam minha prática. As formas orgânicas evocam acolhimento, equilíbrio e a
            natureza cíclica do processo de cura. Um convite à conexão consigo mesmo.
          </SectionSubtitle>
        </LogoInner>
      </LogoSection>

      {/* CTA */}
      <WaveDividerUp fill="#2E3F2B" bg="#F5EFE6" />
      <CtaSection>
        <Container>
          <CtaTitle>Pronto para Começar sua Jornada?</CtaTitle>
          <CtaSub>Entre em contato pelo WhatsApp e agende sua primeira consulta.</CtaSub>
          <BtnPrimary href={WA} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#FAF8F5', color: '#2E3F2B', borderColor: '#FAF8F5' }}>
            Falar com a Elisa
          </BtnPrimary>
        </Container>
      </CtaSection>
    </>
  );
}
