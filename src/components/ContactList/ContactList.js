import { List } from './ContactList.Styled';

import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
const onFilter = (find, contacts) => {
  if (find) {
    return contacts.filter(element =>
      element.name.toLowerCase().includes(find.toLowerCase())
    );
  }
  return contacts;
};
export function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const filterContacts = onFilter(filter, contacts);
  return (
    <List>
      {filterContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}
