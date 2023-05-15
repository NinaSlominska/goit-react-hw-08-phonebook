import { useState } from 'react';
import { Form, Input, Button } from './ContactForm.Styled';

import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { addContact } from 'redux/opertion';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const ok = contacts.find(element => element.name === name);
    if (ok) {
      alert(`${name} is already in contact`);
      return false;
    }
    const id = nanoid();
    const newContact = { id, name, number };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };
  const onChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        placeholder="Name"
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        onChange={onChange}
        placeholder="Number"
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button>Add contact</Button>
    </Form>
  );
};
