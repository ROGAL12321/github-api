import styled, { css } from 'styled-components';

type H1Props = {
  secondary?: any,
  center?: any
}

export const H1 = styled.h1<H1Props>`
  color: ${props => props.secondary ? props.theme.fontColorSecondary : props.theme.fontColorMain};
  ${props => props.center && css`text-align: center;`};
`