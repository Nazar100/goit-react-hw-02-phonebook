import shortid from 'shortid';

import React, { Component } from 'react';
import './App.css';

import ContactsForm from './components/Form/ContactsForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkExistingContacts = name => {
    const isExistingContact = !!this.state.contacts.find(contact => {
      return contact.name === name;
    });

    isExistingContact && alert(`${name} is already in your contacts`);

    return !isExistingContact;
  };

  addContact = contact => {
    const newContact = {
      id: shortid.generate(),
      ...contact,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = e => {
    const key = e.target.dataset.key;

    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => {
        return contact.id !== key;
      }),
    }));
  };

  filterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const filteredContacts = this.getVisibleContacts();

    return (
      <div className="container">
        <div>
          <h1>Phonebook</h1>
          <ContactsForm
            onSubmit={this.addContact}
            checkExistingContacts={this.checkExistingContacts}
          />
          <Filter value={this.state.filter} onChange={this.filterChange} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Contacts
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
