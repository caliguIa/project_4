import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'

import Home from './components/Home'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'
import UserRegister from './components/UserRegister'
import UserLogin from './components/users/UserLogin'
import UserProfile from './components/UserProfile'
import BusinessRegisterBio from './components/BusinessRegister'
import BusinessRegisterFund from './components/BusinessRegisterFund'
import BusinessRegisterTiers from './components/BusinessRegisterTiers'
import BusinessLogin from './components/BusinessLogin'
import BusinessProfile from './components/BusinessProfile'
import PaymentPage from './components/PaymentPage'
import { connect } from 'react-redux'

const App = (props) => {


  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/user/register' component={UserRegister} />
      <Route exact path='/user/login' component={UserLogin} />
      <Route exact path='/user/profile' component={UserProfile} />
      <Route exact path='/search/:query' component={SearchResults} />
      <Route exact path='/business/register' component={BusinessRegister} />
      <Route exact path='/business/login' component={BusinessLogin} />
      <Route exact path='/business/:businessId' component={BusinessProfile} />
      <Route exact path='/payment' component={PaymentPage} />
    </Switch>
  </BrowserRouter>
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
} 

export default connect(mapStateToProps)(App)