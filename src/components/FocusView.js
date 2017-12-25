import React, { Component } from 'react';

class FocusView extends Component {
    render() {
        let { firstName , lastName , id } = this.props.focusPerson[0]
      return (
        <div>
            <hr />
            <p>Focus Person</p><br />
            <p>{id}</p><br />
            <p>{firstName + '     ' + lastName}</p><br />
        </div>
      );
    }
  }



  export default FocusView;