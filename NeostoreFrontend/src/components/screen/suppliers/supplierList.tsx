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

interface SupplierListProps{
    searchQuery: string;
}

const API_URL_GET_ALL_SUPPLIERS = import.meta.env.VITE_API_URL_GET_ALL_SUPPLIERS;

const SupplierList: React.FC<SupplierListProps> = ({searchQuery}) => {
    const [data, setData] = useState<Supplier[]>([]);
    const [filteredData, setFilteredData] = useState<Supplier[]>([]);
    const [paginatedData,setPaginatedData] = useState<Supplier[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [maxRecord, setMaxRecords] = useState(0);
    const [startIndex, setStartIndex] = useState(0);



    useEffect(() => {
        setMaxRecords(5);

        axios
            .get<Supplier[]>(API_URL_GET_ALL_SUPPLIERS)
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


    useEffect(()=>{
        const filtered = data.filter(data =>
            data.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered)
    },[searchQuery,data])
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

                    {searchQuery == "" ? data
                        .filter((_, index) => index >= startIndex && index < startIndex + maxRecord)
                        .map((item) => (

                            <TableRow>
                                <SupplierTableLine>{item.name}</SupplierTableLine>
                                <SupplierTableLine>{item.email}</SupplierTableLine>
                                <SupplierTableLine>{item.cnpj}</SupplierTableLine>
                                <SupplierTableLine>{item.description}</SupplierTableLine>
                            </TableRow>
                        )
                        )
                        : filteredData
                        .filter((_, index) => index >= startIndex && index < startIndex + maxRecord)
                        .map((item) => (

                            <TableRow>
                                <SupplierTableLine>{item.name}</SupplierTableLine>
                                <SupplierTableLine>{item.email}</SupplierTableLine>
                                <SupplierTableLine>{item.cnpj}</SupplierTableLine>
                                <SupplierTableLine>{item.description}</SupplierTableLine>
                            </TableRow>
                        )
                        )}
                </tbody>
            </SupplierTable>
            {loading ? <p>Carregando</p> : null}
            {error ? error : null}

            <Pagination>
                <div>
                    {searchQuery == null ? <p>{startIndex + 1} a {(startIndex + maxRecord) > data.length ? data.length : (startIndex + maxRecord)} de {data.length} itens</p>:<p>{startIndex + 1} a {(startIndex + maxRecord) > data.length ? filteredData.length : (startIndex + maxRecord)} de {filteredData.length} itens</p>}
                </div>
                <div className="flex flex-row">
                    <button onClick={() => {
                        if (startIndex > 0) {
                            setStartIndex(startIndex - maxRecord)
                            data.slice(startIndex, (startIndex + maxRecord))
                        }
                    }}><FaChevronLeft /></button>
                    <button onClick={() => {
                        if ((startIndex + maxRecord) < data.length) {
                            setStartIndex(startIndex + maxRecord)
                            data.slice(startIndex, (startIndex + maxRecord))
                        }
                    }} className="ml-10"><FaChevronRight /></button>
                </div>
            </Pagination>

        </>
    )
}

export default SupplierList