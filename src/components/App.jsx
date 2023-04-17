import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section, Layout } from './Layout.Styled';
const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [contacts, setContacts] = useState(startContacts);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    setContacts(JSON.parse(storageContacts ?? startContacts));
  }, []);

  const onChange = event => {
    setFilter(event.target.value);
  };
  const addContact = (name, number) => {
    const ok = contacts.find(element => element.name === name);
    if (ok) {
      alert(`${name} is already in contact`);
      return false;
    }
    const id = nanoid();
    const newContact = { id, name, number };
    setContacts(prevState => [...prevState, newContact]);

    return true;
  };

  const onFilter = (find, contacts) => {
    if (find) {
      return contacts.filter(element =>
        element.name.toLowerCase().includes(find.toLowerCase())
      );
    }
    return contacts;
  };
  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}></ContactForm>
      <Section>
        <h2>Contacts</h2>
        <Filter onChange={onChange}></Filter>
        <ContactList
          contacts={onFilter(filter, contacts)}
          onDelete={onDelete}
        ></ContactList>
      </Section>
    </Layout>
  );
};
