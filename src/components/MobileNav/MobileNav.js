import React from 'react';
import { Home32 ,User32, Code32, Portfolio32, Email32 } from '@carbon/icons-react';
import './MobileNav.css';
import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles';

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={Home32}
            iconDescription="Home"
            tooltipPosition="bottom"
            className='nav-but'
          />
        </NavLink>

        <NavLink to="/about">
          <NavButton
            hasIconOnly
            renderIcon={User32}
            iconDescription="About"
            tooltipPosition="bottom"
            className='nav-but'
          />
        </NavLink>

        <NavLink to="/resume">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Resume"
            tooltipPosition="bottom"
            className='nav-but'
          />
        </NavLink>

        <NavLink to="/projects">
          <NavButton
            hasIconOnly
            renderIcon={Code32}
            iconDescription="Projects"
            tooltipPosition="bottom"
            className='nav-but'
          />
        </NavLink>

        <NavLink to="/contact">
          <NavButton
            hasIconOnly
            renderIcon={Email32}
            iconDescription="Contact"
            tooltipPosition="bottom"
            className='nav-but'
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav
