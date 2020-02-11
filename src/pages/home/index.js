import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Header from './components/Header'
import Nav from './components/Nav'

class Home extends Component{
  render(){
    return (
      <Fragment>
        <Header/>
        <Nav/>
      </Fragment>
    )
  }
}

export default connect(null, null)(Home)