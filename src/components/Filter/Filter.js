import { Input } from './Filter.Styled';
import PropTypes from 'prop-types';
export function Filter({ onChange }) {
  return (
    <Input
      onChange={onChange}
      placeholder="Find contacts by name"
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
