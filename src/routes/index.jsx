import { BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      {Home}
    </BrowserRouter>
  )
}