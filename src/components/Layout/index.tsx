import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../theme/GlobalStyles';
import theme from '../../theme/GlobalTheme';

import Header from '../Header';
import { BodyContainer } from './styles';
import Footer from '../Footer';

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <BodyContainer>
          <main>{children}</main>
          <Footer />
        </BodyContainer>
      </>
    </ThemeProvider>
  );
};

interface LayoutProps {
  isHomePage?: boolean;
}

export default Layout;
