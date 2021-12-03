import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.brandBlack.header};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    flex-direction: column;
    align-items: flex-start;
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
  display: none;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    display: flex;
  }
`;

export const NavBarLinks = styled.div<{ open: boolean }>`
  height: 100%;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 1rem;
  }

  li:hover {
    background-color: #555;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mdMobileMin}) {
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};

    ul {
      width: 100%;
      flex-direction: column;
    }

    ul li {
      text-align: center;
    }

    ul li a {
      padding: 0.5rem 1rem;
    }
  }
`;
