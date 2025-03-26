import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import SupplierList from "./supplierList";
import { useState } from "react";
import CreateUpdateSupplierPopup from "./createUpdateSupplierPopup";

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



const SupplierFilter: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isCreateUpdateSupplierPopupOpen, setIsCreateUpdateSupplierPopupOpen] = useState(false);
    const [isRefresh,setIsRefresh] = useState(false);

    function onCloseCreateUpdateSupplierPopup() {
        setIsCreateUpdateSupplierPopupOpen(false)
    }

    function onConfirmCreateUpdateSupplierPopup() {
        setIsCreateUpdateSupplierPopupOpen(false)
        setIsRefresh(!isRefresh)
    }

    return (
        <SupplierListContainer>
            <Actions>
                <InputFilter
                    id="search"
                    value={searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event?.target.value)
                    }}
                    type="text" placeholder="Filtrar por nome" />
                <ButtonNewSupplier onClick={()=>{setIsCreateUpdateSupplierPopupOpen(true)}}><FaPlus className="mr-10" />Novo</ButtonNewSupplier>
            </Actions>
            <div className="mt-10">
                <SupplierList isRefresh={isRefresh} searchQuery={searchQuery} />
            </div>

            <CreateUpdateSupplierPopup isOpen={isCreateUpdateSupplierPopupOpen} onClose={onCloseCreateUpdateSupplierPopup} onConfirm={onConfirmCreateUpdateSupplierPopup} SourceSupplier={null}/>

        </SupplierListContainer>
    )
}

export default SupplierFilter