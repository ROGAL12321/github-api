import React from 'react';

import Header from 'components/Header';
import { PageWrapper } from './main.styled';

const MainLayout: React.FC = ({ children }) => (
  <PageWrapper>
    <Header />
    {children}
  </PageWrapper>
)

export default MainLayout;