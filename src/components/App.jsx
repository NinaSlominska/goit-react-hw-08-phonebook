import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section, Layout } from './Layout.Styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  addContact = (name, number) => {
    const ok = this.state.contacts.find(element => element.name === name);
    if (ok) {
      alert(`${name} is already in contact`);
      return false;
    }
    const id = nanoid();
    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    return true;
  };

  onFilter = (find, contacts) => {
    if (find) {
      return contacts.filter(element =>
        element.name.toLowerCase().includes(find.toLowerCase())
      );
    }
    return contacts;
  };
  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}></ContactForm>
        <Section>
          <h2>Contacts</h2>
          <Filter onChange={this.onChange}></Filter>
          <ContactList
            contacts={this.onFilter(this.state.filter, this.state.contacts)}
            onDelete={this.onDelete}
          ></ContactList>
        </Section>
      </Layout>
    );
  }
}
