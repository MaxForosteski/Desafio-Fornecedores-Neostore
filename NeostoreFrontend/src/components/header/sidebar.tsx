import React, { useState } from "react";
import styled from "styled-components";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";

// Container principal da sidebar
const SidebarContainer = styled.div<{ aberto: boolean }>`
  width: ${(props) => (props.aberto ? "350px" : "90px")};
  height: 100vh;
  background-color:rgb(0, 49, 99);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

// Botão de alternância (Abrir/Fechar)
const ToggleButton = styled.button`
  background: rgb(0, 72, 145);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  height: 50px;
`;

// Estilizando os links da sidebar
const NavItem = styled.a<{ aberto: boolean }>`
  text-decoration: none;
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  ${(props) => (props.aberto ? "justify-content: flex-start; padding-left:10%;" : "justify-content: center")};
  gap: 10px;
  font-size: 22px;
  transition: background 0.3s;

  &:hover {
    background: #34495e;
  }
`;

const Title = styled.h3`
  font-size: 34px;
  text-align: center;
  margin-left:10px;
`;

const Sidebar: React.FC = () => {
  const [aberto, setAberto] = useState(true);
  
  return (
  
    <SidebarContainer aberto={aberto}>

      <div className="flex justify-space-around items-center">
        {aberto ? <Title>NeoStore</Title> : <Title>NS</Title>}

        <ToggleButton className="ml-10" onClick={() => setAberto(!aberto)}>
          {aberto ? <FaAnglesLeft /> : <FaAnglesRight />}
        </ToggleButton>
      </div>

      {aberto ? <NavItem aberto={aberto} href="#"><FaBoxOpen />Fornecedores</NavItem> : <NavItem aberto={aberto} href="#"><FaBoxOpen /></NavItem>}

    </SidebarContainer>
  );
};

export default Sidebar;
