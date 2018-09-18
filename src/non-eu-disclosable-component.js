import React from "react";
import makeCall from "./ajaxCall";

class NonEuDisclosable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    makeCall("https://5b994c33197ce5001429eebb.mockapi.io/eu")
      .then(result => {
        console.log(result);
        this.setState({
          data: result
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  render() {
    return (
      <div className="featured-component">
        <p className="component-heading">EU Disqualifying Interests</p>
        <ul className="detailList">
          <li className="detailListItems">No Issuers or Agents to disclose</li>
        </ul>
      </div>
    );
  }
}

export default NonEuDisclosable;
