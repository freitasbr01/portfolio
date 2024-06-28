import { Container } from './styles';
import { LuDownload } from "react-icons/lu";


export function DownloadButton({ ...rest }) {
  const downloadUrl = 'https://raw.githubusercontent.com/freitasbr01/portfolio/main/src/assets/file/Alan%20Pereira%20de%20Freitas.pdf';
  
  return (
    <Container href={downloadUrl} download="Curriculo_AlanFreitas.pdf" target="_blank">
      CURRÍCULO <LuDownload />
    </Container>
  )
}