import { Container, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </Container>
  );
};
