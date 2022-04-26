import { Container, FormContainer, PageTitle } from './styles';
import Logo from '../../assets/logo.svg?component';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { Input } from '../../components/Input';

export function Login() {
  return (
    <Container>
      <Logo />
      <PageTitle>Login</PageTitle>
      <FormContainer>
        <Input  
          icon={<HiOutlineMail />}
          label="E-mail"
          placeholder="your@email.com" />
      </FormContainer>
    </Container>
  )
}