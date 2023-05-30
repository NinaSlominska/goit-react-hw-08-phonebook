import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Form, Input, Button } from 'components/ContactForm/ContactForm.Styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (name.value && email.value && password.value) {
      dispatch(
        register({
          name: name.value,
          email: email.value,
          password: password.value,
        })
      );
      form.reset();
    }
    return;
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input type="text" name="name" placeholder="Username" />

      <Input type="email" name="email" placeholder="Email" />

      <Input type="password" name="password" placeholder="Password" />

      <Button type="submit">Register</Button>
    </Form>
  );
};
