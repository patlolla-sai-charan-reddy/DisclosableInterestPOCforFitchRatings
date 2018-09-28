import React from "react";
import makeCall from "./ajaxCall";

class NonEu extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    makeCall("https://5b994c33197ce5001429eebb.mockapi.io/ef")
      .then(result => {
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
        <p className="component-heading">EU Disclosable Interests</p>
        <ul className="detailList">
          {(() => {
            return this.state.data.map(link => {
              return (
                <div>
                  <li className="detailListItems">{link.name}</li>
                </div>
              );
            });
          })()}
        </ul>
      </div>
    );
  }
}

export default NonEu;
