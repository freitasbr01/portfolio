import { Container } from './styles';

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
      {Icon && <Icon />}
    </Container>
  )
}