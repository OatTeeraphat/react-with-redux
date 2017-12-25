import React, { Component } from 'react';
import { focusPerson } from '../actions'
import { connect } from 'react-redux'

class ListViews extends Component {
    render() {
      return (
        <div>
           {
             this.props.persons.map( person => (
               <div key={person.id} onClick={() => this.props.focusPerson(person.id)}>
                    <p>{person.firstName + '     ' + person.lastName}</p><br />
                </div>
             ))
           }
        </div>
      );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
      focusPerson: (id) => dispatch(focusPerson(id))
  };
};

  export default connect(null,mapDispatchToProps)(ListViews)