import React from 'react';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';



import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>

      {/*import UserHeader from '../UserHeader';*/}

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
