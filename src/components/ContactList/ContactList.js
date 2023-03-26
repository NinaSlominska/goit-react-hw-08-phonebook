import { List, Button, ListItem } from './ContactList.Styled';
import PropTypes from 'prop-types'; 
export function ContactList({ contacts, onDelete }) {
    return (<List>
        {contacts.map(
            ({ id, name, number }) => {
                return (
                    <ListItem key={id} id={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <Button type="button" onClick={() => onDelete(id)}>
                            Delete
                        </Button>
                    </ListItem>
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