import React, { useCallback, useState } from 'react'
import { ResultItem, RepositoryOwner, ResultItemArrow, RepositoryList, RepositoryListItem, RepositoryName, RepositoryDescription, StarContainer } from './Results.styled'
import { useSelector, shallowEqual } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

const Results: React.FC<RouteComponentProps> = ({ history }) => {
  const results = useSelector((state: any) => state.user.results, shallowEqual)
  const [activePosition, setActivePosition] = useState<number | null>(null);

  const handleArrowClick = useCallback((index) => {
    activePosition === index
      ? setActivePosition(null)
      : setActivePosition(index)
  }, [activePosition])

  if (results.length === 0) history.push('/')

  return (
    <div>
      {
        results.map((result: any, index: any) => {
          const owner = Object.keys(result)[0]
          const repositories: any = Object.values(result)[0]

          return (
            <ResultItem key={index}>
              <RepositoryOwner onClick={() => handleArrowClick(index)}>
                {owner}
                <ResultItemArrow isActive={activePosition === index} >{'>'}</ResultItemArrow>
              </RepositoryOwner>
              <RepositoryList isActive={activePosition === index}>
                {
                  repositories.map(({ id, name, description, stargazers_count }: any) => (
                    <RepositoryListItem key={id}>
                      <RepositoryName>{name}</RepositoryName>
                      <RepositoryDescription>{description}</RepositoryDescription>
                      <StarContainer>
                        {stargazers_count} &#9733;
                      </StarContainer>
                    </RepositoryListItem>
                  ))
                }
              </RepositoryList>
            </ResultItem>
          )
        })
      }
    </div>
  )
}

export default withRouter(Results)