import { Container, CloseButton  } from './styles';
import Modal from 'react-modal';

import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import HtmlIcon from '../Icons/HtmlIcon';
import CssIcon from '../Icons/CssIcon';
import JavaScriptIcon from '../Icons/JavaScriptIcon';
import ReactIcon from '../Icons/ReactIcon';
import ViteIcon from '../Icons/ViteIcon';
import StyledIcon from '../Icons/StyledIcon';
import GitIcon from '../Icons/GitIcon';
import GithubIcon from '../Icons/GithubIcon';

import { useState } from 'react';

import { IoMdClose } from 'react-icons/io';

export function Project({ title, description, links, photo, ...rest}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Container>
      
        <img src={photo} alt="Foto do projeto" onClick={openModal} />
        
        <div className="description">
          <h2>{title.h2}</h2>
          <p>{description}</p>
          <h3>{title.h3}</h3>

          <div className="skills">
            <JavaScriptIcon />
            <ReactIcon />
            <HtmlIcon />
            <CssIcon />
            <ViteIcon  />
            <GitIcon />
            <GithubIcon />
            <StyledIcon />
          </div>

          <div className="access">
            <div className="repo">
              <FaGithub />
              <a href={links.repo} target="_blank" rel="noopener noreferrer">Repositório</a>
            </div>

            <div className="deploy">
              <GrDeploy />
              <a href={links.deploy} target="_blank" rel="noopener noreferrer">Deploy</a>
            </div>
          </div>
        </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Foto ampliada"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)'
          },
          content: {
            display: 'flex',
            justifyContent: 'center',
            inset: '0%',
            padding: '0',
            border: 'none',
            background: 'transparent'
          }
        }}
      >
        <div 
          style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'end', 
            justifyContent: 'center' }} 
          >
          <CloseButton onClick={closeModal}>
            <IoMdClose />
          </CloseButton>

          <img 
            src={photo} 
            alt="Foto do projeto ampliada" 
            style={{ maxWidth: '105rem', objectFit: 'contain'}} 
          />
        </div>

      </Modal>

    </Container>
  )
}
