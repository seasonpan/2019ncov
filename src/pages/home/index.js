import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Header from './components/Header'
import Nav from './components/Nav'
import Map from './components/Map'
import News from './components/News'
import Rumor from './components/Rumor'


class Home extends Component{
  render(){
    return (
      <Fragment>
        <Header/>
        <Nav/>
        <Map/>
        <Rumor/>
        <News/>
      </Fragment>
    )
  }
}

export default connect(null, null)(Home)