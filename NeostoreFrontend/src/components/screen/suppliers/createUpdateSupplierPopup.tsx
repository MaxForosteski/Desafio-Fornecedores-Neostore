import React, { useState } from 'react';
import styled from 'styled-components';
import { Supplier } from '../../../type/supplier';

// Estilos
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
  `;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  height: 500px;
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

const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const InputGroup = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
`;

const InputLabel = styled.label`
`;

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  Supplier: Supplier | null;
}

const CreateUpdateSupplierPopup: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Form>
          <ModalTitle>Fornecedor</ModalTitle>
          <InputGroup></InputGroup>
          <InputGroup>
            <InputLabel><label htmlFor="name">Nome:</label></InputLabel>
            <Input type="text" id="name" name="name" />



            <InputLabel htmlFor="email">Email:</InputLabel><br />
            <Input type="email" id="email" name="email" />





            <InputLabel htmlFor="cnpj">CNPJ:</InputLabel>
            <Input type="text" id="cnpj" name="cnpj" />



            <InputLabel htmlFor="description">Descrição:</InputLabel>
            <Input type="text" id="description" name="description" />


          </InputGroup>

          <ModalButtons>
            <Button className="cancel" onClick={onClose} type="button">Cancelar</Button>
            <Button className="confirm" onClick={onConfirm} type="submit">Salvar</Button>
          </ModalButtons>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};



export default CreateUpdateSupplierPopup;
