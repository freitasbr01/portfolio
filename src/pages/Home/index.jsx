import { Container, Menu, Top, Main } from './styles';

import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';

import { BoxAbout } from '../../components/BoxAbout';
import { BoxProjects } from '../../components/BoxProjects';

import { Routes, Route } from 'react-router-dom';

export function Home() {
  return (    
    <Container>
      <Menu>
        <SideBar />
      </Menu>
      
      <Top>
        <Header />
      </Top>

      <Main>
        <div className="box-main">

          {/* <Routes>
            <Route path="/about" element={
              <>
                <BoxAbout />
              </>
            }/>
          </Routes> */}
          
          
          {/* <BoxAbout /> */}

          <BoxProjects />

          

        </div>
      </Main>

    </Container>
  )
}