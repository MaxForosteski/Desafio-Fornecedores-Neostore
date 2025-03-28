import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Supplier } from "../../../type/supplier";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import DeleteConfirm from "../../common/deleteConfirmation";
import refreshSupplier from "../actions/refreshSupplier";
import deleteSupplier from "../actions/deleteSupplier";
import CreateUpdateSupplierPopup from "./createUpdateSupplierPopup";

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

interface SupplierListProps {
    searchQuery: string;
    isRefresh: boolean;
}


const SupplierList: React.FC<SupplierListProps> = ({ searchQuery, isRefresh }) => {

    const [data, setData] = useState<Supplier[]>([]);
    const [filteredData, setFilteredData] = useState<Supplier[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const [maxRecord, setMaxRecords] = useState(0);
    const [startIndex, setStartIndex] = useState(0);

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [selectedItemDelete, setSelectedItemDelete] = useState<Supplier | null>(null);

    const [isCreateUpdateSupplierPopupOpen, setIsCreateUpdateSupplierPopupOpen] = useState(false);
    const [selectedItemUpdate, setSelectedItemUpdate] = useState<Supplier | null>(null);


    function onOpenDeletePopup(supplier: Supplier): void {
        setIsOpenDelete(true);
        setSelectedItemDelete(supplier);
    }

    function refreshSuppliersWrapper(){
        refreshSupplier().then((suppliers) => {
            setData(suppliers);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }

    function editOnClick(supplier:Supplier):void{
        setSelectedItemUpdate(supplier);
        setIsCreateUpdateSupplierPopupOpen(true);

    }

    function onConfirmDeletePopup(): void {
        if (selectedItemDelete) {
            deleteSupplier(selectedItemDelete).then(() => {
                refreshSupplier().then((suppliers) => {
                    setData(suppliers);
                    setLoading(false);
                }).catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
            }).catch((err) => {
                setError(err.message);
                setLoading(false);
            });
            onCloseDeletePopup();
        } else {
            console.error("Error deleting supplier: supplier is null");
        }

    }

    function onCloseCreateUpdateSupplierPopup() {
        setIsCreateUpdateSupplierPopupOpen(false)
    }

    function onConfirmCreateUpdateSupplierPopup() {
        setIsCreateUpdateSupplierPopupOpen(false)
        refreshSuppliersWrapper();
    }

    function onCloseDeletePopup(): void {
        setIsOpenDelete(false);
        setSelectedItemDelete(null);
    }

    useEffect(() => {
        setMaxRecords(5);
        refreshSuppliersWrapper();
    }, []);

    useEffect(() => {
        const filtered = data.filter(data =>
            data.name?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered)
    }, [searchQuery, data])


    useEffect(() => {
        refreshSuppliersWrapper();
    }, [isRefresh])

    return (

        <>
            <SupplierTable>
                <thead>
                    <tr>
                        <SupplierTableHead></SupplierTableHead>
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
                                <SupplierTableLine className="font-size-20 text-center"><FaTrashAlt className="color-red" onClick={
                                    () => {
                                        onOpenDeletePopup(item);
                                    }
                                } /> <MdModeEdit className="ml-30" onClick={
                                    () =>{
                                        editOnClick(item);
                                    }
                                }/> </SupplierTableLine>
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
                                    <SupplierTableLine className="font-size-20 text-center"><FaTrashAlt className="color-red" onClick={
                                        () => {
                                            onOpenDeletePopup(item);
                                        }
                                    } /> <MdModeEdit className="ml-30" onClick={
                                        () =>{
                                            editOnClick(item);
                                        }
                                    }/></SupplierTableLine>
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
                    {searchQuery == null ?
                        <p>{startIndex + 1} a {(startIndex + maxRecord) > data.length ? data.length : (startIndex + maxRecord)} de {data.length} itens</p>
                        :
                        <p>{startIndex + 1} a {(startIndex + maxRecord) > filteredData.length ? filteredData.length : (startIndex + maxRecord)} de {filteredData.length} itens</p>}
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
                    
            <CreateUpdateSupplierPopup isOpen={isCreateUpdateSupplierPopupOpen} onClose={onCloseCreateUpdateSupplierPopup} onConfirm={onConfirmCreateUpdateSupplierPopup} SourceSupplier={selectedItemUpdate}/>

            <DeleteConfirm isOpen={isOpenDelete} onClose={onCloseDeletePopup} onConfirm={onConfirmDeletePopup} />
        </>
    )
}

export default SupplierList