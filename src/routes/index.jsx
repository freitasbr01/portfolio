import { BrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';

export function Route() {
  return (
    <BrowserRouter>
      { <Home /> }
    </BrowserRouter>
  )
}