import { Container } from './styles';
import { LuDownload } from "react-icons/lu";


export function DownloadButton({ ...rest }) {
  return (
    <Container href="path/to/your/curriculo.pdf" download="Curriculo_AlanFreitas.pdf">
      CURRÍCULO <LuDownload />
    </Container>
  )
}