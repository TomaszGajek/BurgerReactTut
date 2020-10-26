import React from 'react';
import Aux from '../../hoc/Hoc';
import { Main }  from './Layout.styles';

type ComponentProps = {
  readonly children: React.ReactElement;
};
  
const Layout = ({ children }: ComponentProps ) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Main>
      { children }
    </Main>  
  </Aux>
  
  
);

export default Layout;
