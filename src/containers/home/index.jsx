import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import './home.css';

class Home extends Component {

  handleClickTransBtn(transType) {
    if (transType === 'car') {
      this.props.history.push({
        pathname: '/car',
        state: { transType: 'car' }
      })
    } else {
      this.props.history.push({
        pathname: '/person',
        state: { transType }
      })
    }
  }

  render() {
    return (
      <div>
        <div className="trans-type-wrapper">
          <div
            onClick={() => { this.handleClickTransBtn('walking') }} className="trans-type-btn walking">
            Walking
          </div>
          <div
            onClick={() => { this.handleClickTransBtn('running') }} className="trans-type-btn running">
            Running
          </div>
          <div
            onClick={() => { this.handleClickTransBtn('bike') }} className="trans-type-btn biking">
            Bike
          </div>
          <div
            onClick={() => { this.handleClickTransBtn('car') }} className="trans-type-btn car">
            Car
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
