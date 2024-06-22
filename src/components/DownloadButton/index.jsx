import { Container } from './styles';
import { LuDownload } from "react-icons/lu";


export function DownloadButton({ ...rest }) {
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1ON1nbaL90oTUB0q2hJfFvn3uqw4Wrx4J';

  return (
    <Container href={downloadUrl} download="Curriculo_AlanFreitas.pdf" target="_blank">
      CURRÍCULO <LuDownload />
    </Container>
  )
}