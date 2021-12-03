import styled from 'styled-components';

export const HomeBannerLeft = styled.div`
  align-self: baseline;

  p,
  h1 {
    color: #fff;
  }

  h1 {
    font-size: 5em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    h1 {
      font-size: 2em;
    }
  }
`;

export const HomeBannerRight = styled.div`
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    align-self: flex-start;

    img {
      width: 100%;
    }
  }
`;
