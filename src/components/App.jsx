// import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section, Layout } from './Layout.Styled';
// const startContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
export const App = () => {
  // const storageContacts = localStorage.getItem('contacts');
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(storageContacts) ?? startContacts
  // );
  // // const [filter, setFilter] = useState('');
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <Section>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </Section>
    </Layout>
  );
};
