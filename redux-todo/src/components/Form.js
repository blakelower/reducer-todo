import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
    };
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    this.setState({ item: '' });
    this.props.addItem(e, this.state.item);
  };
  render() {
    console.log('loading form');
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type='text'
          value={this.state.item}
          name='item'
          onChange={this.handleChanges}
        />
        <button>Add Form</button>
      </form>
    );
  }
}

export default Form; 