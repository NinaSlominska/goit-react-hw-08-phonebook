import { List} from './ContactList.Styled';
import PropTypes from 'prop-types'; 
import { Contact } from 'components/Contact/Contact';
export function ContactList({ contacts, onDelete }) {
    return (<List>
        {contacts.map(
            ({ id, name, number }) => {
                return (
                  <Contact
                    key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDelete={onDelete}
                    />
                );
            }
        )}
        </List>)
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};