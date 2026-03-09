import styled from 'styled-components';

const Wrap = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background: ${({ $bg }) => $bg || 'transparent'};
  svg { display: block; width: 100%; }
`;

export function WaveDividerDown({ fill = '#FAF8F5', bg }) {
  return (
    <Wrap $bg={bg}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fill} />
      </svg>
    </Wrap>
  );
}

export function WaveDividerUp({ fill = '#FAF8F5', bg }) {
  return (
    <Wrap $bg={bg}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </Wrap>
  );
}

export function LeafDivider({ fill = '#F5EFE6', bg }) {
  return (
    <Wrap $bg={bg}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 Q720,60 1440,0 L1440,60 L0,60 Z" fill={fill} />
      </svg>
    </Wrap>
  );
}

