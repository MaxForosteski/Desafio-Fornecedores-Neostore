import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Supplier } from '../../../type/supplier';
import createSupplier from '../actions/createSupplier';
import updateSupplier from '../actions/updateSupplier';

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
width: 100%;
  `;

const ModalContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 1200px;
  height: auto;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow:hidden;
`;

const ModalTitle = styled.p`
  font-size: 24px;
  font-weight:bolder;
  margin-bottom: 40px;
`;

const ModalButtons = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  text-align: right;
  justify-content: flex-end;
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
    background-color: rgb(31, 141, 55);
    color: white;
  }

  &.cancel {
    background-color: #5bc0de;
    color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 15px;
  color:black;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
`;

const InputGroup = styled.div`
  display: flex;  
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 98%;
`;

const InputLabel = styled.label`
`;

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  SourceSupplier: Supplier | null;
}

const CreateUpdateSupplierPopup: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, SourceSupplier }) => {
  if (!isOpen) return null;

  const [supplier, setSupplier] = useState<Supplier | null>(SourceSupplier);

  function Close() {
    setSupplier(null);
    onClose();
  }

  function Confirm() {
    if (supplier) {
      if (supplier.id == null) {
        createSupplier(supplier)
          .then(() => {
            alert('Fornecedor salvo com sucesso!');
            onConfirm();
          })
          .catch((error) => {
            console.error('Erro ao salvar fornecedor:', error);
            alert('Ocorreu um erro ao salvar o fornecedor. Tente novamente.');
          });
      }else{
        updateSupplier(supplier)
        .then(() => {
          alert('Fornecedor salvo com sucesso!');
          onConfirm();
        })
        .catch((error) => {
          console.error('Erro ao salvar fornecedor:', error);
          alert('Ocorreu um erro ao salvar o fornecedor. Tente novamente.');
        });
      }

    } else {
      alert('Preencha os dados do fornecedor antes de salvar.');
    }
    onConfirm
  }


  useEffect(() => {
    if (SourceSupplier) {
      setSupplier(SourceSupplier);
    }
  }
    , [SourceSupplier])

  return (
    <Overlay>
      <ModalContainer>
        {SourceSupplier?.id == null ? <ModalTitle>Fornecedor - Criar Registro</ModalTitle> : <ModalTitle>Fornecedor - Editar Registro</ModalTitle>}
        <Form>
          <div className="">
            <InputGroup >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '40%' }}>
                <InputLabel><label htmlFor="name">Nome</label></InputLabel>
                <Input onChange={(e) => setSupplier({ ...supplier, name: e.target.value } as Supplier)} value={supplier?.name} type="text" id="name" name="name" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '50%' }}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input onChange={(e) => setSupplier({ ...supplier, email: e.target.value } as Supplier)} value={supplier?.email} type="email" id="email" name="email" />
              </div>
            </InputGroup>






            <InputGroup>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '30%' }}>
                <InputLabel htmlFor="cnpj">CNPJ</InputLabel>
                <Input onChange={(e) => setSupplier({ ...supplier, cnpj: e.target.value } as Supplier)} value={supplier?.cnpj} type="text" id="cnpj" name="cnpj" />
              </div>



              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '65%' }}>
                <InputLabel htmlFor="description">Descrição</InputLabel>
                <Input onChange={(e) => setSupplier({ ...supplier, description: e.target.value } as Supplier)} value={supplier?.description} type="text" id="description" name="description" />
              </div>
            </InputGroup>




          </div>




        </Form>
        <ModalButtons>
          <Button className="cancel" onClick={Close} type="button">Cancelar</Button>
          <Button className="confirm ml-30" onClick={Confirm} type="submit">Salvar</Button>
        </ModalButtons>
      </ModalContainer>
    </Overlay>
  );
};



export default CreateUpdateSupplierPopup;
