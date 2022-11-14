import styled from 'styled-components';

export const StyledHeroBanner = styled.section<{ bgImage?: string }>`
  background: url(${({ bgImage }) => bgImage || 'none'}) no-repeat center top;
  background-size: cover;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding: 80px 10px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    flex-direction: row;
    height: 100vh;
  }
`;
