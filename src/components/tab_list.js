import React, { Component } from 'react';

class TabList extends Component {
  render() {
    return(
      <div>
        <button type="button" onClick={event => this.props.toggleHistoryView(false)} >Search</button>
        <button type="button" onClick={event => this.props.toggleHistoryView(true)} >View History</button>
      </div>
    );
  }
}

export default TabList;
