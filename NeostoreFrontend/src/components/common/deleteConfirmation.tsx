import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  margin-bottom: 20px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &.confirm {
    background-color: #d9534f;
    color: white;
  }

  &.cancel {
    background-color: #5bc0de;
    color: white;
  }
`;

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmation: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalTitle>Deseja excluir este registro?</ModalTitle>
        <ModalButtons>
          <Button className="cancel" onClick={onClose}>Cancelar</Button>
          <Button className="confirm" onClick={onConfirm}>Excluir</Button>
        </ModalButtons>
      </ModalContainer>
    </Overlay>
  );
};



export default DeleteConfirmation;
