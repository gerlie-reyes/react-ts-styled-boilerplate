import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.brandBlack.header};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0.5rem;
  text-transform: uppercase;
`;

export const StyledMenuToggle = styled.a<{ open: boolean }>`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;

  span {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    display: none;
  }
`;

export const NavBarLinks = styled.div<{ open: boolean }>`
  height: 100%;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};

  @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    width: auto;
    display: flex;
  }

  & ul {
    width: 100%;
    padding-top: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;
    }
  }

  & ul li {
    list-style: none;
    text-align: center;

    &:hover {
      background-color: #555;
    }
  }

  & ul li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 0.5rem 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
      padding: 1rem;
    }
  }
`;
