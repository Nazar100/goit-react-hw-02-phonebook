import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';

import ContactsForm from './components/Form/ContactsForm';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = contact => {
    let name = contact[0];
    let number = contact[1];
    const item = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [item, ...contacts],
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
