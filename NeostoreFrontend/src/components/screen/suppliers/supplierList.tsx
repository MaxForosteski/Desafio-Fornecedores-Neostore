import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { Supplier } from "../../../type/supplier";

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

const API_URL_GET_ALL_SUPPLIERS = import.meta.env.VITE_API_URL_GET_ALL_SUPPLIERS;

const SupplierList: React.FC = () => {
    const [data, setData] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        axios
            .get(API_URL_GET_ALL_SUPPLIERS)
            .then((response) => {
                setData(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }

        , []);

    return (

        <>
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
                    {loading ? <p>Carregando</p> : null}
                    {error ? error : null}
                    {data != null ? data.map((item) => {
                        return (
                            <TableRow>
                                <SupplierTableLine>{item.name}</SupplierTableLine>
                                <SupplierTableLine>{item.email}</SupplierTableLine>
                                <SupplierTableLine>{item.cnpj}</SupplierTableLine>
                                <SupplierTableLine>{item.description}</SupplierTableLine>
                            </TableRow>
                        )
                    }) : null}
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

        </>
    )
}

export default SupplierList