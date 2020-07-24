import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useForm } from 'react-hook-form';

import { FormWrapper } from './SearchForm.styled'
import { InputRow, Label, Input, Button, Error } from 'styles/form';

import ActionTypes from 'types/ActionTypes'

import { getUsers, getRepositories } from 'services/user'

type FormData = {
  query?: string
}

const SearchForm: React.FC<RouteComponentProps> = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const [isValidationError, setValidationError] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = ({ query }: FormData) => {
    getUsers(query)
      .then(getRepositories)
      .then(results => {
        if (results.length === 0) return setValidationError(true)

        dispatch({
          type: ActionTypes.GET_RESULTS,
          results
        })

        history.push('/results')
      })
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputRow>
          <Label> Query </Label>
          <Input
            name="query"
            type="text"
            ref={register({ required: true })}
          />
          {errors.query && <Error>Query is required</Error>}
        </InputRow>
        <Button center>Search</Button>
        {isValidationError && <Error> No repositories connected with that query. Try again.</Error>}
      </form>
    </FormWrapper>
  )
}

export default withRouter(SearchForm)