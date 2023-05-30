import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Button } from 'components/ContactForm/ContactForm.Styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    return;
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input type="email" name="email" placeholder="Email" />

      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit">Log In</Button>
    </Form>
  );
};
