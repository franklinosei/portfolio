import React from 'react';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';



import { StyledContent } from './styles';

const Layout = ({ children }) => {
  return (
    <>

      <MobileNav />
      <Sidebar />

      <StyledContent>
        {/*<UserHeader user={user} />*/}
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
