import { List} from './ContactList.Styled';
import PropTypes from 'prop-types'; 
import { Contact } from 'components/Contact/Contact';
export function ContactList({ contacts, onDelete }) {
    return (<List>
        {contacts.map(
            ({ id, name, number }) => {
                return (
                    <Contact
                        id={id}
                        name={name}
                        number={number}
                        onDelete={onDelete}
                    />
                    
                    // <ListItem key={id} id={id}>
                    //     <p>
                    //         {name}: {number}
                    //     </p>
                    //     <Button type="button" onClick={() => onDelete(id)}>
                    //         Delete
                    //     </Button>
                    // </ListItem>
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