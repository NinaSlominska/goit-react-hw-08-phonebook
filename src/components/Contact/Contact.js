import { useDispatch } from 'react-redux';
import { Button, ListItem } from './Contact.Styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
export function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact({ id }));
  };
  return (
    <ListItem id={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </ListItem>
  );
}
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
