import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Section, LayoutStyled } from 'components/Layout/Layout.Styled';
// import { Section } from 'components/Layout/Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
// import { LayoutStyled } from 'components/Layout/Layout.styled';
import { getIsLoading, getError } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <LayoutStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </LayoutStyled>
  );
}
export default Contacts;
