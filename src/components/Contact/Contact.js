import { Button, ListItem } from './Contact.Styled';
import PropTypes from 'prop-types';
export function Contact({ name, number, id, onDelete }) {
      return <ListItem  id={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <Button type="button" onClick={() => onDelete(id)}>
                            Delete
                        </Button>
                    </ListItem>
}
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};