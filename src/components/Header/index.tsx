import React, { useState } from 'react';
import { Nav, Logo, NavBarLinks } from './HeaderStyles';
import MenuToggle from './MenuToggle';
import { Link } from 'react-router-dom';
import { routesList } from '../../routes/routes.list';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <Logo>Gerlie Reyes</Logo>

        <MenuToggle open={open} setOpen={setOpen} />

        <NavBarLinks open={open}  >
          <ul>
            {routesList.map((route) => {
              return (
                <li>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              );
            })}
          </ul>
        </NavBarLinks>
      </Nav>
    </>
  );
};

export default Header;
