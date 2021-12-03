import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo, NavBarLinks } from './HeaderStyles';
import MenuToggle from './MenuToggle';
import { routesList } from '../../routes/routes.list';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <Logo>Gerlie Reyes</Logo>

        <MenuToggle open={open} setOpen={setOpen} />

        <NavBarLinks open={open}>
          <ul>
            {routesList.map((route) => {
              return (
                <li key={route.id}>
                  <Link id={route.id} to={route.path}>
                    {route.name}
                  </Link>
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
