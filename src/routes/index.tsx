import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import RouterWrapper from './wrapper';

import SearchPage from 'pages/Search';
import ResultsPage from 'pages/Results';

const AppRouter: React.FC = () => {
  return (
    <RouterWrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </Router>
    </RouterWrapper>
  )
}

export default AppRouter