import React from 'react'
import { HeaderWrapper } from './Header.styled'
import { H1 } from 'styles/typography';

const Header: React.FC = () => (
  <HeaderWrapper>
    <H1 secondary center>Github Api Example</H1>
  </HeaderWrapper>
)

export default Header