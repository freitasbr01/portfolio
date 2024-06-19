import { Container } from "./styles"

export function Title({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <h1>{title}</h1>
    </Container>
  )
}