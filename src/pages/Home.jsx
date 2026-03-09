import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { WaveDividerDown, WaveDividerUp, LeafDivider } from '../components/SvgDividers';
import { BtnPrimary, BtnSecondary, BtnWhite, SectionTitle, SectionSubtitle, Container } from '../styles/ui';
import { FaBrain, FaMicrophone, FaHandshake, FaLaptop, FaTv, FaLeaf, FaSpa, FaStar, FaBook } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const WA = 'https://wa.me/5519981281661';

/* ── HERO ── */
const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.offwhite} 0%, ${({ theme }) => theme.colors.beige} 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 7rem 1.5rem 5rem;
`;

const HeroOrb = styled.div`
  position: absolute;
  right: -8%;
  top: 50%;
  transform: translateY(-50%);
  width: min(55vw, 650px);
  height: min(55vw, 650px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(122,158,126,0.18) 0%, rgba(122,158,126,0.04) 70%);
  pointer-events: none;
`;

const HeroOrbSmall = styled.div`
  position: absolute;
  left: -5%;
  bottom: 10%;
  width: min(25vw, 300px);
  height: min(25vw, 300px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%);
  pointer-events: none;
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroContent = styled.div`
  max-width: 680px;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.9s 0.1s both;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(122,158,126,0.12);
  border: 1px solid rgba(122,158,126,0.3);
  color: ${({ theme }) => theme.colors.moss};
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
  width: fit-content;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  line-height: 1.1;
  margin-bottom: 1.5rem;
  span { font-style: italic; color: ${({ theme }) => theme.colors.sage}; }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 2.5rem;
`;

const HeroCtas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const HeroGhostLink = styled(Link)`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.moss};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: gap 0.3s;
  &:hover { gap: 0.6rem; }
`;

const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
  @media (min-width: 900px) {
    grid-template-columns: 1fr auto;
    gap: 4rem;
  }
`;

const HeroLogoImg = styled.img`
  width: min(340px, 72vw);
  height: auto;
  display: block;
  margin: 0 auto;
  opacity: 0.92;
  filter: drop-shadow(0 20px 50px rgba(74,103,65,0.18));
  animation: ${fadeInUp} 1s 0.3s both;
  @media (max-width: 899px) {
    width: min(200px, 55vw);
    order: -1;
  }
`;

/* ── SERVICES ── */
const ServicesSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.offwhite};
  @media (min-width: 768px) { padding: 8rem 3rem; }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ServiceCard = styled.div`
  background-color: ${({ $featured, theme }) => $featured ? theme.colors.beige : theme.colors.beige};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  border: 1px solid ${({ $featured, theme }) => $featured ? theme.colors.gold : 'rgba(122,158,126,0.1)'};
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: default;
  position: relative;
  overflow: hidden;
  ${({ $featured, theme }) => $featured && `
    background: linear-gradient(145deg, ${theme.colors.beige} 60%, rgba(201,169,110,0.08) 100%);
    box-shadow: 0 4px 24px rgba(201,169,110,0.12);
  `}
  &:hover {
    box-shadow: 0 8px 40px rgba(74,103,65,0.1);
    transform: translateY(-5px);
  }
`;

const FeaturedTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background-color: ${({ theme }) => theme.colors.gold};
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.65rem;
  border-radius: 50px;
  margin-bottom: 0.85rem;
`;

const ServiceIcon = styled.div`
  margin-bottom: 1rem;
  line-height: 1;
  svg { width: 2.2rem; height: 2.2rem; color: ${({ theme }) => theme.colors.moss}; }
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  margin-bottom: 0.5rem;
`;

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

/* ── DIFERENCIAIS ── */
const DifsSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.beige};
  @media (min-width: 768px) { padding: 8rem 3rem; }
`;

const DifsInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
`;

const DifsText = styled.div``;

const DifsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const DifItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const DifIconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: rgba(122,158,126,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  svg { width: 1.3rem; height: 1.3rem; color: ${({ theme }) => theme.colors.moss}; }
`;

const DifContent = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkMoss};
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
`;

const DifsVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderImage = styled.img`
  width: min(100%, 440px);
  aspect-ratio: 3/4;
  border-radius: 40% 60% 60% 40% / 50% 40% 60% 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

/* ── TESTIMONIALS ── */
const TestimonialsSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.offwhite};
  @media (min-width: 768px) { padding: 8rem 3rem; }
  .swiper-button-next, .swiper-button-prev {
    color: ${({ theme }) => theme.colors.sage};
    &::after { font-size: 1.2rem; }
  }
  .swiper-pagination-bullet-active { background: ${({ theme }) => theme.colors.sage}; }
`;

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(122,158,126,0.1);
  height: auto;
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 1.1rem;
`;

const TestimonialText = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.15rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.cocoa};
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  span {
    display: block;
    &:first-child {
      font-weight: 500;
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colors.darkMoss};
    }
    &:last-child {
      font-size: 0.82rem;
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
`;

/* ── ABOUT PREVIEW ── */
const AboutSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.beige};
  @media (min-width: 768px) { padding: 8rem 3rem; }
`;

const AboutInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  @media (min-width: 768px) { grid-template-columns: 300px 1fr; }
`;

const AvatarCircle = styled.img`
  width: min(260px, 70vw);
  height: min(260px, 70vw);
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  margin: 0 auto;
  display: block;
  border: 4px solid ${({ theme }) => theme.colors.sage};
`;

/* ── CTA FINAL ── */
const CtaSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.darkMoss};
  text-align: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(122,158,126,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const CtaTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.beige};
  margin-bottom: 1rem;
  line-height: 1.15;
  position: relative;
`;

const CtaSub = styled.p`
  font-size: 1.05rem;
  color: rgba(245,239,230,0.9);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  position: relative;
`;

/* ── DATA ── */
const services = [
  { icon: <FaBrain />, title: 'Consulta Psicológica', desc: 'Atendimento individual online e presencial com foco no bem-estar emocional e mental.' },
  { icon: <FaMicrophone />, title: 'Palestras', desc: 'Palestras para empresas, escolas e comunidades sobre saúde mental e qualidade de vida.', featured: true },
  { icon: <FaHandshake />, title: 'Grupos de Vivência', desc: 'Espaço coletivo de autoconhecimento, escuta e desenvolvimento emocional compartilhado.' },
  { icon: <FaLaptop />, title: 'Mentorias Online', desc: 'Cursos e mentorias estruturados para aprofundar o autoconhecimento e desenvolver regulação emocional.', featured: true },
  { icon: <FaTv />, title: 'Lives Terapêuticas', desc: 'Conteúdo ao vivo com orientações práticas sobre saúde mental, ansiedade e bem-estar.' },
];

const diferenciais = [
  { icon: <FaLeaf />, title: '25 anos de experiência clínica', desc: 'Atuação com adolescentes, adultos, grupos e casais desde 2000.' },
  { icon: <FaSpa />, title: 'Psicoterapia Corporal', desc: '3 especializações em abordagem que integra técnicas corporais e emocionais.' },
  { icon: <FaStar />, title: 'Visão integrada: corpo, mente e alma', desc: 'Compreensão holística do ser humano em cada atendimento.' },
  { icon: <FaBook />, title: 'Atualização contínua', desc: 'Formação em Terapia do Esquema e NR-1 (Riscos Psicossociais).' },
];

const testimonials = [
  { text: 'A Dra. Elisa mudou minha vida. Com sua escuta atenciosa e técnicas corporais, consegui superar a ansiedade que me paralisava há anos. Sou muito grata!', name: 'M.A.', city: 'Vinhedo, SP' },
  { text: 'Profissional incrível, muito ética e atenciosa. Me sinto completamente acolhida em cada sessão. Recomendo de olhos fechados.', name: 'C.R.', city: 'Campinas, SP' },
  { text: 'As técnicas de psicoterapia corporal que a Elisa utiliza são transformadoras. Percebi mudanças reais na minha regulação emocional em poucos meses.', name: 'F.S.', city: 'Valinhos, SP' },
];

/* ── COMPONENT ── */
export default function Home() {
  const servicesRef = useRef(null);
  const difsRef = useRef(null);
  const aboutRef = useRef(null);
  const ctaFinalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (servicesRef.current) {
        gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: servicesRef.current, start: 'top 80%', once: true } }
        );
      }
      if (difsRef.current) {
        gsap.fromTo(difsRef.current.querySelectorAll('.dif-item'),
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: difsRef.current, start: 'top 75%', once: true } }
        );
      }
      if (aboutRef.current) {
        gsap.fromTo(aboutRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: aboutRef.current, start: 'top 80%', once: true } }
        );
      }
      if (ctaFinalRef.current) {
        gsap.fromTo(ctaFinalRef.current.querySelectorAll('h2, p, a'),
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: ctaFinalRef.current, start: 'top 80%', once: true } }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <HeroSection>
        <HeroOrb />
        <HeroOrbSmall />
        <Container>
          <HeroInner>
            <HeroContent>
              <HeroBadge>❆ CRP Ativo | 25 Anos de Experiência</HeroBadge>
              <HeroTitle>
                Cuide da Sua <span>Saúde Mental</span> com Atendimento Personalizado e Humanizado
              </HeroTitle>
              <HeroSubtitle>
                Psicóloga com 25 anos de experiência em atendimento clínico, corporal e integrado. Presencial em Vinhedo/SP e online.
              </HeroSubtitle>
              <HeroCtas>
                <BtnPrimary href={WA} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta pelo WhatsApp
                </BtnPrimary>
                <HeroGhostLink to="/servicos">
                  Conhecer os Serviços →
                </HeroGhostLink>
              </HeroCtas>
            </HeroContent>
            <HeroLogoImg src="/icon-logo.PNG" alt="" aria-hidden="true" />
          </HeroInner>
        </Container>
      </HeroSection>

      <WaveDividerDown fill="#FAF8F5" bg={`linear-gradient(145deg, #FAF8F5 0%, #F5EFE6 100%)`} />

      {/* SERVICES */}
      <ServicesSection ref={servicesRef}>
        <Container>
          <SectionTitle>Como Posso Te Ajudar</SectionTitle>
          <SectionSubtitle>Serviços pensados para o seu bem-estar emocional, em diferentes formatos.</SectionSubtitle>
          <ServicesGrid>
            {services.map((s, i) => (
              <ServiceCard key={i} className="service-card" $featured={s.featured}>
                {s.featured && <FeaturedTag>★ Destaque</FeaturedTag>}
                <ServiceIcon>{s.icon}</ServiceIcon>
                <ServiceTitle>{s.title}</ServiceTitle>
                <ServiceDesc>{s.desc}</ServiceDesc>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <LeafDivider fill="#F5EFE6" bg="#FAF8F5" />

      {/* DIFERENCIAIS */}
      <DifsSection>
        <Container>
          <DifsInner ref={difsRef}>
            <DifsText>
              <SectionTitle>Por Que a Elisa?</SectionTitle>
              <SectionSubtitle>Uma abordagem única que integra ciência, experiência e cuidado genuíno.</SectionSubtitle>
              <DifsList>
                {diferenciais.map((d, i) => (
                  <DifItem key={i} className="dif-item">
                    <DifIconWrap>{d.icon}</DifIconWrap>
                    <DifContent>
                      <h4>{d.title}</h4>
                      <p>{d.desc}</p>
                    </DifContent>
                  </DifItem>
                ))}
              </DifsList>
            </DifsText>
            <DifsVisual>
              <PlaceholderImage src="/elisa_bege.jpeg" alt="Elisa Pereira Psicóloga" />
            </DifsVisual>
          </DifsInner>
        </Container>
      </DifsSection>

      <WaveDividerDown fill="#FAF8F5" bg="#F5EFE6" />

      {/* TESTIMONIALS */}
      <TestimonialsSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center' }}>Confiança de Quem Já Passou Pelo Nosso Atendimento</SectionTitle>
          <SectionSubtitle style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            Histórias reais de transformação e cuidado.
          </SectionSubtitle>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            style={{ paddingBottom: '3rem' }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard>
                  <Stars>★★★★★</Stars>
                  <TestimonialText>"{t.text}"</TestimonialText>
                  <TestimonialAuthor>
                    <span>{t.name}</span>
                    <span>{t.city}</span>
                  </TestimonialAuthor>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </TestimonialsSection>

      <LeafDivider fill="#F5EFE6" bg="#FAF8F5" />

      {/* ABOUT PREVIEW */}
      <AboutSection>
        <AboutInner ref={aboutRef}>
          <AvatarCircle src="/elisa_roupa_verde.jpeg" alt="Elisa Pereira Psicóloga" />
          <div>
            <SectionTitle>Olá, eu sou a Elisa</SectionTitle>
            <SectionSubtitle>
              Psicóloga formada há 25 anos, com 3 especializações em Psicoterapia Corporal e uma visão integrada
              de corpo, mente e alma. Atendo adolescentes, adultos, casais e grupos — online e presencial em Vinhedo/SP.
              Tenho ajudado pessoas a superar depressão, ansiedade, síndrome do pânico, burnout e outros desafios
              da saúde mental, com ética, atenção e cuidado constante.
            </SectionSubtitle>
            <BtnSecondary as={Link} to="/sobre">Saiba Mais Sobre Mim →</BtnSecondary>
          </div>
        </AboutInner>
      </AboutSection>

      <WaveDividerUp fill="#2E3F2B" bg="#F5EFE6" />

      {/* CTA FINAL */}
      <CtaSection>
        <Container>
          <div ref={ctaFinalRef}>
            <CtaTitle>Dê o Primeiro Passo Para o Seu Bem-Estar</CtaTitle>
            <CtaSub>Agende sua avaliação inicial. Atendimento online e presencial em Vinhedo/SP.</CtaSub>
            <BtnWhite href={WA} target="_blank" rel="noopener noreferrer">
              Falar com a Elisa no WhatsApp
            </BtnWhite>
          </div>
        </Container>
      </CtaSection>
    </>
  );
}
