import styled from 'styled-components';

export const StyledHeroBanner = styled.section<{ bgImage?: string }>`
  background: url(${({ bgImage }) => bgImage || 'none'}) no-repeat center top;
  background-size: cover;
  background-color: #000000;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 80px 10px;
  height: 100vh;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    flex-direction: column;
  }
`;
