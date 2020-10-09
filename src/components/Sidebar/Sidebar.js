import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import './Sidebar.css';
import { StyledSideNav } from './styles';
import Tilt from 'react-tilt';
import img from '../../pages/About/img/img.jpg';

const items = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <div className='header-wrapper'>

      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className='header-image Tilt-inner'>
        <a href='/'>
          <img alt='brandimage' src={img} />
        </a>
      </div>
      </Tilt>



      <SideNavItems>

        <div className='nav-menu'>

        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
            
          >
            {i.name}
          </SideNavLink>
        ))}



        </div>
      </SideNavItems>
      <p class="mi-header-copyright">
            © 2020 
            <b>
              <a rel="noopener noreferrer" target="_blank" href="/">
                Franklin Osei
              </a>
            </b>
        </p>
      </div>
    </StyledSideNav>
  );
};

export default Sidebar;
