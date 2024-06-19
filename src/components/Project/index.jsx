import { Container, BoxCloseImg, CloseButton  } from './styles';
import Modal from 'react-modal';
import React from 'react';

import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { useState } from 'react';

import { IoMdClose } from 'react-icons/io';

export function Project({ title, description, links, photo, icons = [], ...rest}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Container>
      <img 
        src={photo} 
        loading="lazy" 
        alt="Foto do projeto" 
        onClick={openModal}
      />
       
      <div className="description">

        <h2>{title.h2}</h2>
        <p>{description}</p>
        <h3>{title.h3}</h3>

        <div className="skills">
          {icons.map((icon, index) => React.cloneElement(icon, { key: index }))}
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
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
          content: {
            display: 'flex',
            justifyContent: 'center',
            inset: '2%',
            padding: '0',
            border: 'none',
            background: 'transparent'
          }
        }}
      >
        <BoxCloseImg>
          <CloseButton onClick={closeModal}>
            <IoMdClose />
          </CloseButton>
          
          <img src={photo} loading="lazy" alt="Foto do projeto ampliada" />
        </BoxCloseImg>

      </Modal>
    </Container>
  )
}
