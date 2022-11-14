import styled from 'styled-components';

export const HomeBannerLeft = styled.div`
  align-self: baseline;

  p,
  h1 {
    color: #fff;
  }

  h1 {
    font-size: 2em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    h1 {
      font-size: 5em;
    }
  }
`;

export const HomeBannerRight = styled.div`
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    align-self: center;
  }

  img {
    width: 100%;
  }
`;
