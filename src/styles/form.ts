import styled, { css } from 'styled-components'

export const Label = styled.label`
  color: ${props => props.theme.colorMain};
  display: block;
  font-size: 12px;
  margin-bottom: .5em;
  font-weight: ${props => props.theme.fontWeightMedium};
`

export const InputRow = styled.div`
  margin: 1em 0;
`

export const Input = styled.input`
  border: 0;
  box-shadow: 0;
  border-bottom: 1px solid ${props => props.theme.fontColorMain};
  outline: none;
  display: block;
  width: 100%;
  transition: border-bottom .3s ease;
  padding-bottom: 2px;
  &:focus {
      border-bottom: 2px solid ${props => props.theme.colorMain};
  }
`

type ButtonProps = {
  center?: any
}

export const Button = styled.button<ButtonProps>`
  box-shadow:
    0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(0,0,0,.2),
    0 1px 5px 0 rgba(0,0,0,.12);
  background: ${props => props.theme.colorSecondary};
  color: ${props => props.theme.fontColorSecondary};
  border: 0;
  border-radius: 2px;
  font-size: ${props => props.theme.fontSizeSmall};
  padding: 6px 1em;
  font-weight: ${props => props.theme.fontWeightBold};
  margin: 1em 1.5em;
  display: block;
  ${props => props.center && css`margin-left: auto; margin-right: auto;`};
`

export const Error = styled.p`
  color: ${props => props.theme.colorSecondary};
  font-size: 12px;
  margin: 5px 0;
`