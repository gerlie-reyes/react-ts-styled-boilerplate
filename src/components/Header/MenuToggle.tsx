import React from 'react';
import { StyledMenuToggle } from './HeaderStyles';

const MenuToggle: React.FC<MenuToggleProps> = (props) => {
  return (
    <StyledMenuToggle
      open={props.open}
      onClick={() => props.setOpen(!props.open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledMenuToggle>
  );
};

interface MenuToggleProps {
  open: boolean;
  setOpen: any;
}

export default MenuToggle;
