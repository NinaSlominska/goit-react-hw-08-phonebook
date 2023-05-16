import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section, Layout } from './Layout.Styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/opertion';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Layout>
  );
};
