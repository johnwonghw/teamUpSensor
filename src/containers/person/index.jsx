import React, { Component } from 'react';
import _helper from '../../common/helper.jsx'
import { withRouter } from "react-router-dom";

class PersonPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      transType: this.props.location.state.transType ? this.props.location.state.transType : 'walking'

    }
  }

  componentDidMount() {
    this.initPersonPage()
  }

  initPersonPage = () => {
    _helper.getCurrentLocation()
  }

  render() {
    console.log(this.props)
    let {transType} = this.state;
    return (
      <div>
        <div>{transType}</div>
      </div>
    );
  }
}

export default withRouter(PersonPage);
