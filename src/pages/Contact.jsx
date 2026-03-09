import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BtnPrimary, Container, SectionTitle, SectionSubtitle } from '../styles/ui';
import { WaveDividerDown } from '../components/SvgDividers';

gsap.registerPlugin(ScrollTrigger);

const WA = 'https://wa.me/5519981281661';
const INSTAGRAM = 'https://www.instagram.com/psicologaelisapereira';

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
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.8;
  animation: ${fadeInUp} 0.8s 0.4s both;
`;

/* ── Contact section ── */
const ContactSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.offwhite};
  @media (min-width: 768px) { padding: 8rem 3rem; }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  @media (min-width: 900px) { grid-template-columns: 1fr 1fr; }
`;

/* ── Form ── */
const FormWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(122,158,126,0.12);
`;

const FormTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkMoss};
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  label {
    display: block;
    font-size: 0.82rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.moss};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(122,158,126,0.25);
  background-color: ${({ theme }) => theme.colors.offwhite};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.sage};
    box-shadow: 0 0 0 3px rgba(122,158,126,0.12);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(122,158,126,0.25);
  background-color: ${({ theme }) => theme.colors.offwhite};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  resize: vertical;
  min-height: 130px;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.sage};
    box-shadow: 0 0 0 3px rgba(122,158,126,0.12);
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.moss};
  background-color: ${({ theme }) => theme.colors.moss};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover { background-color: ${({ theme }) => theme.colors.darkMoss}; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const SuccessMsg = styled.div`
  text-align: center;
  padding: 2rem;
  h4 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.moss};
    margin-bottom: 0.5rem;
  }
  p { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.95rem; }
`;

/* ── Contact Info ── */
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(122,158,126,0.1);
  text-decoration: none;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0 6px 24px rgba(74,103,65,0.1);
    transform: translateY(-3px);
  }
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(122,158,126,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

const InfoText = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.05rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkMoss};
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.88rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.5;
  }
`;

/* ── Map ── */
const MapSection = styled.section`
  padding: 0 1.5rem 6rem;
  background-color: ${({ theme }) => theme.colors.offwhite};
`;

const MapWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(122,158,126,0.15);
  height: 340px;
  iframe { width: 100%; height: 100%; display: block; border: none; }
`;

/* ── Component ── */
export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current.querySelectorAll('.animate-card'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Build WhatsApp message from form
    const msg = `Olá Elisa! Me chamo ${form.name}.\n\nTelefone: ${form.phone}\nE-mail: ${form.email}\n\nMensagem: ${form.message}`;
    const url = `${WA}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setTimeout(() => { setSubmitting(false); setSent(true); }, 400);
  };

  const contactItems = [
    { icon: '💬', title: 'WhatsApp', desc: '+55 19 98128-1661', href: WA },
    { icon: '📧', title: 'E-mail', desc: 'elisascognamiglio@uol.com.br', href: 'mailto:elisascognamiglio@uol.com.br' },
    { icon: '📍', title: 'Localização', desc: 'Vinhedo, São Paulo — SP', href: 'https://maps.google.com/?q=Vinhedo,SP' },
    { icon: '📸', title: 'Instagram', desc: '@psicologaelisapereira', href: INSTAGRAM },
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <div>
            <HeroLabel>Fale comigo</HeroLabel>
            <HeroTitle>Contato</HeroTitle>
            <HeroSub>
              Tem alguma dúvida ou quer agendar uma consulta? Estou aqui para te atender.
            </HeroSub>
          </div>
        </Container>
      </HeroSection>

      <WaveDividerDown fill="#FAF8F5" bg={`linear-gradient(145deg, #F5EFE6, #FAF8F5)`} />

      <ContactSection ref={sectionRef}>
        <Container>
          <ContactGrid>
            {/* Form */}
            <FormWrap className="animate-card">
              {sent ? (
                <SuccessMsg>
                  <h4>Mensagem enviada! 🌿</h4>
                  <p>Você foi redirecionado para o WhatsApp. A Elisa retornará em breve.</p>
                </SuccessMsg>
              ) : (
                <>
                  <FormTitle>Envie uma Mensagem</FormTitle>
                  <form onSubmit={handleSubmit}>
                    <FormGroup>
                      <label htmlFor="name">Seu Nome</label>
                      <Input id="name" name="name" type="text" placeholder="Como posso te chamar?" value={form.name} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="email">E-mail</label>
                      <Input id="email" name="email" type="email" placeholder="seu@email.com" value={form.email} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="phone">Telefone / WhatsApp</label>
                      <Input id="phone" name="phone" type="tel" placeholder="(19) 9 9999-9999" value={form.phone} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="message">Mensagem</label>
                      <Textarea id="message" name="message" placeholder="Fale um pouco sobre o que está buscando..." value={form.message} onChange={handleChange} required />
                    </FormGroup>
                    <SubmitBtn type="submit" disabled={submitting}>
                      {submitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                    </SubmitBtn>
                  </form>
                </>
              )}
            </FormWrap>

            {/* Info */}
            <InfoWrap>
              {contactItems.map((item, i) => (
                <InfoCard key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="animate-card">
                  <InfoIcon>{item.icon}</InfoIcon>
                  <InfoText>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </InfoText>
                </InfoCard>
              ))}
            </InfoWrap>
          </ContactGrid>
        </Container>
      </ContactSection>

      {/* Map */}
      <MapSection>
        <MapWrap>
          <iframe
            title="Localização Vinhedo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59177.52297!2d-47.0!3d-23.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5c4c3b6e3d3f%3A0x1234567890abcdef!2sVinhedo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapWrap>
      </MapSection>
    </>
  );
}
