/* eslint-disable */
import React, { useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// @material-ui/core components
import Box from '@material-ui/core/Box'
// core components
import Header from '../Header'
import Footer from '../Footer'
import Dashboard from '../../pages/Dashboard'
import MyPage from '../../pages/MyPage'
import Earn from '../../pages/Earn'
import Utility from '../../pages/Utility'

const Index = () => {
  const switchRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/my-page" component={MyPage} />
        <Route exact path="/earn" component={Earn} />
        <Route exact path="/utility" component={Utility} />
      </Switch>
    )
  }

  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          overflow: 'hidden',
          position: 'relative',
          background: '#000',
        }}
      >
        <div
          style={{
            position: 'sticky',
            boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 8px 0px',
            top: 0,
            zIndex: 110,
          }}
        >
          <Header />
        </div>
        <Box>{switchRoutes()}</Box>

        <Footer />
      </div>
    </Router>
  )
}

export default Index
