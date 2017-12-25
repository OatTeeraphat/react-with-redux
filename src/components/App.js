import React, { Component } from 'react';
import { connect } from 'react-redux'
import { receiveApi } from '../actions'
import ListViews from './ListViews'
import FocusView from './FocusView'

class App extends Component {
  
  // wait 5 second loading
  componentDidMount = () => {
      setTimeout(() => this.props.receiveApi(),5000)
  }
  
  render() {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

    return (
      <div>
          <ListViews 
              persons = {this.props.persons}
           />
           <FocusView
              focusPerson = {this.props.persons.filter(person => (person.id === this.props.focus))}
           />
      </div>
    );
  }
}
// call state
function mapStateToProps(state) {
    return {
      persons: state.Persons,
      isLoading: state.isLoading,
      isError: state.isError,
      focus: state.focus
    }
}

// dispatch action type to store
function mapDispatchToProps(dispatch) {
  return {
    receiveApi: () => dispatch(receiveApi()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
