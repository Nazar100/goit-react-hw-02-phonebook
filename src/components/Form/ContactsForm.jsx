import React, { Component } from 'react';

import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const target = e.currentTarget.name;

    this.setState({ [target]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name === '' || number === '') return;

    this.props.onSubmit([name, number]);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={s.container}>
          <label>
            Enter the name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleInput}
            />
          </label>
          <label>
            Enter the number
            <input
              type="number"
              value={number}
              name="number"
              onChange={this.handleInput}
            />
          </label>
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
