import styled, { css } from 'styled-components';

export const ResultItem = styled.div`
  background: #eee;
  padding: 10px;
`

export const RepositoryOwner = styled.p`
  padding: 10px 0;
`

type ListType = {
  isActive?: Boolean
}

export const RepositoryList = styled.ul<ListType>`
  list-style: none;
  display: ${props => props.isActive ? 'block' : 'none'};
`

export const RepositoryListItem = styled.li`
  margin-top: 20px;  
  position: relative;
`

type ResultItemArrowType = {
  isActive?: Boolean
}

export const ResultItemArrow = styled.span<ResultItemArrowType>`
float: right;
    font-weight: bold;
  transform: ${props => props.isActive && css`rotate(90deg)`};
  transition: transform .3s ease;
`

export const StarContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const RepositoryName = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`

export const RepositoryDescription = styled.p`
  font-weight: 400;
  padding-right: 20px;
`