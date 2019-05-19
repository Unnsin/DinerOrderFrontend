import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import MainContainer from './MainContainer'
import AuthContainer from './AuthContainer'
import BusketContainer from './BusketContainer'
import OrderAdminContainer from './OrderAdminContainer'
import PersonalArea from './PersonalArea'
import MenuContainer from './MenuContainer'
import Header from '../component/Header/index'
import Footer from '../component/Footer/index'
import './appStyle.css'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="main-container" >
          <Route path="/" exact component={MainContainer} />
          <Route path="/auth" exact component={AuthContainer} />
          <Route path="/busket" exact component={BusketContainer} />
          <Route path="/order-admin" exact component={OrderAdminContainer} />
          <Route path="/personal-area" exact component={PersonalArea} />
          <Route path="/menu" exact component={MenuContainer} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);