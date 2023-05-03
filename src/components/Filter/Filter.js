import { useDispatch } from 'react-redux';
import { Input } from './Filter.Styled';

import { changeValue } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(changeValue(event.target.value));
  };
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
