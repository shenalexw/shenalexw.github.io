import React, { Component } from "react";

type Props = {
  logo: string;
  position: string;
};

type State = {};

export default class WorkTile extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="work-tile">
        <img className="work-image" alt="work" src={this.props.logo} />
        &nbsp;
        <div className="work-position">{this.props.position}</div>
      </div>
    );
  }
}
