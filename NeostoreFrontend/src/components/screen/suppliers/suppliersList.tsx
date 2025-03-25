import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const SupplierListContainer = styled.div`
    display: flex;
    flex-grow: 1;
    height: 86%;
    width: auto;
    padding: 20px;
    flex-direction: column;
`;

const InputFilter = styled.input`
    width: 30%;
    height: 30px;
    border-radius: 10px;
    border: solid 1px rgb(173, 173, 173);
    padding: 10px;
    margin: 10px;
    font-size: 18px;
    background: white;
    color: black;
    ::placeholder {
        color: black;
    }
    &:focus {
        border-color: black ;
    }
`;
const Actions = styled.div`
    display: flex;
    margin:20px;
    align-items: center;
    height: 50px;
    justify-content: space-between;
`;
const ButtonNewSupplier = styled.button`
    border: solid 1px rgb(116, 116, 116);
    background: rgb(31, 141, 55);
    color:white;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SupplierTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
`;

const SupplierTableHead = styled.th`
    background-color: #007bff;
    color: white;
    padding: 12px;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
`;

const SupplierTableLine = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #e9ecef;
    transition: background-color 0.3s ease-in-out;
  }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

const SupplierList: React.FC = () => {
    return (
        <SupplierListContainer>
            <Actions>
                <InputFilter type="text" placeholder="Filtrar por nome" />
                <ButtonNewSupplier><FaPlus className="mr-10" />Novo</ButtonNewSupplier>
            </Actions>

            <SupplierTable>
                <thead>
                    <tr>
                        <SupplierTableHead>Nome</SupplierTableHead>
                        <SupplierTableHead>Email</SupplierTableHead>
                        <SupplierTableHead>CNPJ</SupplierTableHead>
                        <SupplierTableHead>Descrição</SupplierTableHead>
                    </tr>
                </thead>

                <tbody>
                    <TableRow>
                        <SupplierTableLine>NeoStore</SupplierTableLine>
                        <SupplierTableLine>Neo@gmail</SupplierTableLine>
                        <SupplierTableLine>123456789</SupplierTableLine>
                        <SupplierTableLine>Descrição</SupplierTableLine>
                    </TableRow>
                </tbody>
            </SupplierTable>

            <Pagination>
                <div>
                    <p>1 a 1 de 1 item</p>
                </div>

                <div className="flex flex-row">
                    <button><FaChevronLeft /></button>
                    <p className="ml-10">1</p>
                    <button className="ml-10"><FaChevronRight /></button>
                </div>
            </Pagination>


        </SupplierListContainer>
    )
}

export default SupplierList