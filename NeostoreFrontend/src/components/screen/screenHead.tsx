    import styled from "styled-components";
    import { FaArrowLeft } from "react-icons/fa6";
    import { FaRegCircleUser } from "react-icons/fa6";
    import { FaCog } from "react-icons/fa";

    const ReturnButton = styled.button`
        background:white;
        border: solid 1px rgb(31, 141, 55);
        color: rgb(31, 141, 55);
        font-size: 24px;
        cursor: pointer;
        padding: 10px;
        text-align: center;
        height: 50px;
        z-index:100;
    `;


    const ScreenHeadContainer = styled.div`
        display: flex;
        flex-grow: 1;
        width: 100%;
        height: 14%;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        padding: 20px;
        background: rgb(255, 255, 255);
    `;

    const Breadcrumbs = styled.p`
        font-size: 18px;
        color: black;
        margin-left: 20px;
    `;

    const Title = styled.h3`
        font-size: 34px;
    `;

    const User = styled.button`
        border: solid 1px rgb(116, 116, 116);
        background: white;
        color:black;
        padding: 10px;
        font-size: 18px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;



    const ScreenHead: React.FC = () => {
        return (
            <ScreenHeadContainer>
                <div className="flex justify-space-around items-center ml-10">

                    <ReturnButton><FaArrowLeft /></ReturnButton>

                    <div className="flex justify-center items-center flex-column ml-30">

                        <Breadcrumbs>Página Inicial &gt; Fornecedores</Breadcrumbs>
                        <Title>Fornecedores</Title>

                    </div>
                </div>

                <div className="">
                    <User><FaRegCircleUser className="p-5 font-size-30" />Usuário<FaCog className="p-5 ml-5 border-rounded-soft"/></User>
                    
                </div>
            </ScreenHeadContainer>
        );
    }

    export default ScreenHead;