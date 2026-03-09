import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BtnPrimary, Container, SectionTitle, SectionSubtitle } from '../styles/ui';
import { WaveDividerDown, WaveDividerUp } from '../components/SvgDividers';

gsap.registerPlugin(ScrollTrigger);

const WA = 'https://wa.me/5519981281661';

/* ── Styled Components ── */
const HeroSection = styled.section`
  padding: 9rem 1.5rem 5rem;
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.beige} 0%, ${({ theme }) => theme.colors.offwhite} 100%);
  text-align: center;
  @media (min-width: 768px) { padding: 10rem 3rem 6rem; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroLabel = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.moss};
  margin-bottom: 0.75rem;
  animation: ${fadeInUp} 0.7s 0.1s both;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  line-height: 1.1;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 0.9s 0.25s both;
`;

const HeroSub = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  animation: ${fadeInUp} 0.8s 0.4s both;
`;

/* ── Accordion ── */
const AccordionSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.offwhite};
  @media (min-width: 768px) { padding: 8rem 3rem; }
`;

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

const AccordionItem = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 16px;
  border: 1px solid rgba(122,158,126,${({ $open }) => $open ? '0.3' : '0.1'});
  overflow: hidden;
  transition: border-color 0.3s;
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;
  &:hover { background-color: rgba(122,158,126,0.06); }
`;

const AccordionIcon = styled.span`
  font-size: 1.8rem;
  flex-shrink: 0;
  line-height: 1;
`;

const AccordionMeta = styled.div`
  flex: 1;
`;

const AccordionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  margin-bottom: 0.2rem;
`;

const AccordionSubtitle = styled.span`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.sage};
  font-weight: 500;
`;

const AccordionChevron = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.sage};
  transform: rotate(${({ $open }) => $open ? '180deg' : '0'});
  transition: transform 0.35s ease;
  flex-shrink: 0;
`;

const AccordionBody = styled.div`
  overflow: hidden;
  height: 0;
`;

const AccordionContent = styled.div`
  padding: 0 1.5rem 1.75rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 640px) { grid-template-columns: 1fr 1fr; }
`;

const ContentBlock = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkMoss};
    margin-bottom: 0.5rem;
  }
  p, ul {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
  }
  ul { padding-left: 1.2rem; li { margin-bottom: 0.35rem; } }
`;

const AccordionCta = styled.div`
  padding: 0 1.5rem 1.75rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

/* ── CTA ── */
const CtaSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.darkMoss};
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.8rem, 4vw, 3rem);
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
const services = [
  {
    icon: '🧠',
    title: 'Consulta Psicológica',
    subtitle: 'Online e Presencial · Individual',
    desc: 'Atendimento psicológico individualizado com foco em saúde mental, equilíbrio emocional e autoconhecimento. Utilizando técnicas integradas de corpo, mente e alma.',
    forWhom: ['Adolescentes e adultos', 'Casais', 'Pessoas com ansiedade, depressão, burnout, síndrome do pânico'],
    format: 'Online (qualquer lugar do Brasil) e presencial em Vinhedo/SP.',
    highlights: ['Técnicas corporais', 'Escuta ativa', 'Acompanhamento contínuo'],
  },
  {
    icon: '🎤',
    title: 'Palestras',
    subtitle: 'Empresas, Escolas e Comunidades',
    desc: 'Palestras impactantes e transformadoras sobre saúde mental, qualidade de vida, prevenção ao burnout e bem-estar emocional no ambiente coletivo.',
    forWhom: ['Empresas (clínicas, HR, equipes)', 'Escolas e universidades', 'Comunidades e grupos sociais'],
    format: 'Presencial ou online. Personalizável por tema e público.',
    highlights: ['Temáticas sob demanda', 'Linguagem acessível e científica', 'Interativa e participativa'],
  },
  {
    icon: '🤝',
    title: 'Grupos de Vivência',
    subtitle: 'Espaço Coletivo de Crescimento',
    desc: 'Grupos terapêuticos que criam um espaço seguro de partilha, escuta e desenvolvimento emocional coletivo. Uma forma poderosa de cura e pertencimento.',
    forWhom: ['Pessoas que buscam autoconhecimento em grupo', 'Quem quer compartilhar experiências', 'Adultos em processo de transformação pessoal'],
    format: 'Encontros periódicos presenciais ou online em grupos reduzidos.',
    highlights: ['Ambiente acolhedor', 'Facilitação especializada', 'Conexão genuína'],
  },
  {
    icon: '💻',
    title: 'Cursos Online',
    subtitle: 'Aprendizado e Autoconhecimento',
    desc: 'Cursos estruturados para aprofundar o autoconhecimento, desenvolver regulação emocional e aprender ferramentas práticas de saúde psíquica.',
    forWhom: ['Público geral', 'Quem busca autonomia emocional', 'Pessoas com interesse em psicologia aplicada'],
    format: 'Totalmente online, no seu ritmo. Disponíveis em plataforma digital.',
    highlights: ['Conteúdo científico acessível', 'Exercícios práticos', 'Suporte via comunidade'],
  },
  {
    icon: '📺',
    title: 'Lives Terapêuticas',
    subtitle: 'Conteúdo ao Vivo',
    desc: 'Transmissões ao vivo com orientações práticas, reflexões e conteúdo terapêutico sobre temas relevantes da saúde mental contemporânea.',
    forWhom: ['Seguidores nas redes sociais', 'Pessoas em busca de orientação gratuita', 'Todos os públicos'],
    format: 'Online, ao vivo nas redes sociais. Livre e acessível.',
    highlights: ['Interação direta', 'Temas do cotidiano', 'Totalmente gratuito'],
  },
];

/* ── Accordion Item Component ── */
function AccordionServiceItem({ service, index }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const contentRef = useRef(null);

  const toggle = () => {
    if (!bodyRef.current || !contentRef.current) return;
    if (!open) {
      gsap.set(bodyRef.current, { height: 'auto' });
      const h = bodyRef.current.offsetHeight;
      gsap.fromTo(bodyRef.current, { height: 0 }, { height: h, duration: 0.45, ease: 'power3.out' });
      gsap.from(contentRef.current.children, { opacity: 0, y: 10, stagger: 0.08, duration: 0.35, delay: 0.1, ease: 'power2.out' });
    } else {
      gsap.to(bodyRef.current, { height: 0, duration: 0.35, ease: 'power3.in' });
    }
    setOpen(v => !v);
  };

  return (
    <AccordionItem $open={open} className="accordion-item">
      <AccordionHeader onClick={toggle}>
        <AccordionIcon>{service.icon}</AccordionIcon>
        <AccordionMeta>
          <AccordionTitle>{service.title}</AccordionTitle>
          <AccordionSubtitle>{service.subtitle}</AccordionSubtitle>
        </AccordionMeta>
        <AccordionChevron $open={open}>▾</AccordionChevron>
      </AccordionHeader>

      <AccordionBody ref={bodyRef}>
        <AccordionContent ref={contentRef}>
          <ContentBlock>
            <h4>Sobre o Serviço</h4>
            <p>{service.desc}</p>
          </ContentBlock>
          <ContentBlock>
            <h4>Para Quem é Indicado</h4>
            <ul>{service.forWhom.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </ContentBlock>
          <ContentBlock>
            <h4>Formato</h4>
            <p>{service.format}</p>
          </ContentBlock>
          <ContentBlock>
            <h4>Destaques</h4>
            <ul>{service.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
          </ContentBlock>
        </AccordionContent>
        <AccordionCta>
          <BtnPrimary href={WA} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', padding: '0.7rem 1.6rem' }}>
            Saber Mais no WhatsApp
          </BtnPrimary>
        </AccordionCta>
      </AccordionBody>
    </AccordionItem>
  );
}

/* ── Main Component ── */
export default function Services() {
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.fromTo(listRef.current.querySelectorAll('.accordion-item'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: listRef.current, start: 'top 80%', once: true } }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <HeroSection>
        <Container>
          <div>
            <HeroLabel>O que ofereço</HeroLabel>
            <HeroTitle>Serviços</HeroTitle>
            <HeroSub>
              Soluções terapêuticas personalizadas para o seu bem-estar mental e emocional,
              em diferentes formatos e modalidades.
            </HeroSub>
          </div>
        </Container>
      </HeroSection>

      <WaveDividerDown fill="#FAF8F5" bg={`linear-gradient(145deg, #F5EFE6, #FAF8F5)`} />

      <AccordionSection>
        <Container>
          <SectionTitle>Todos os Serviços</SectionTitle>
          <SectionSubtitle>Clique em cada serviço para ver os detalhes completos.</SectionSubtitle>
          <AccordionList ref={listRef}>
            {services.map((s, i) => (
              <AccordionServiceItem key={i} service={s} index={i} />
            ))}
          </AccordionList>
        </Container>
      </AccordionSection>

      <WaveDividerUp fill="#2E3F2B" bg="#FAF8F5" />

      <CtaSection>
        <Container>
          <CtaTitle>Tem dúvidas sobre qual serviço é ideal para você?</CtaTitle>
          <CtaSub>Fale comigo pelo WhatsApp e vamos encontrar juntos o melhor caminho.</CtaSub>
          <BtnPrimary href={WA} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#FAF8F5', color: '#2E3F2B', borderColor: '#FAF8F5' }}>
            Conversar com a Elisa
          </BtnPrimary>
        </Container>
      </CtaSection>
    </>
  );
}
