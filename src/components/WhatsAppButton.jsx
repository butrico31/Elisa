import styled, { keyframes } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WA_LINK = 'https://wa.me/5519981281661';

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(74,103,65,0.4); }
  70% { box-shadow: 0 0 0 14px rgba(74,103,65,0); }
  100% { box-shadow: 0 0 0 0 rgba(74,103,65,0); }
`;

const FloatBtn = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2000;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.moss};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(74,103,65,0.35);
  transition: background-color 0.3s, transform 0.3s;
  animation: ${pulse} 2.5s infinite;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkMoss};
    transform: scale(1.1);
  }
`;

export default function WhatsAppButton() {
  return (
    <FloatBtn href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp">
      <FaWhatsapp size={28} />
    </FloatBtn>
  );
}
