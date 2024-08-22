import { Container, Content } from './styles';

import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';
import { BoxAbout } from '../../components/BoxAbout';
import { BoxProjects } from '../../components/BoxProjects';
import { BoxStack } from '../../components/BoxStack';

import {Routes, Route } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import { useState } from "react";


export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <div className="line"></div>
      
        <SideBar 
          menuIsOpen={menuIsOpen} 
          onCloseMenu={() => setMenuIsOpen(false)}
        />

        <Content>
          <Header onOpenMenu={() => setMenuIsOpen(true)} />

          <div className="box-main">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/about" element={<BoxAbout />} />
                <Route path="/projects" element={<BoxProjects />} />
                <Route path="/stack" element={<BoxStack />} />

                <Route path="/" element={<BoxAbout />} />
              </Routes>
            </AnimatePresence>
          </div>
        </Content>

    </Container>
  )
}