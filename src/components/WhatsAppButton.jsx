import styled, { keyframes } from 'styled-components';

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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.535 5.863L.057 23.667a.5.5 0 0 0 .606.61l5.97-1.562A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.5-5.27-1.39l-.378-.215-3.908 1.023 1.044-3.8-.234-.39A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </FloatBtn>
  );
}
