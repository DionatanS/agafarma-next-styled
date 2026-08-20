import styled from "styled-components"

export const ContainerCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 490px;
    min-height: 354px;
    background-color: #fff;
    box-shadow: 0px 10px 29px rgba(68, 88, 144, 0.1);
    border-radius: 10px;
    /* transition-property: transform; */
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    &:hover {
        transform: translateY(-5px);
    }
    @media (max-width: 1180px) {
        width: 400px;
    }
    @media (max-width: 860px) {
        width: 340px;
        min-height: 370px;
    }
    @media (max-width: 768px) {
        width: 300px;
    }
    @media (max-width: 668px) {
        width: 350px;
    }
` 
export const ButtonMap = styled.button`
    position: absolute;
    width: 100px;
    height: 30px;
    background-color: #01649C;
    margin-top: 10px;
    margin-right: 10px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 12px;
    color: #fff;
    cursor: pointer;
    font-family: 'Roboto';
    font-size: 12px;
    &:hover{
        opacity: 0.9;
    }

`

export const ContainerImage = styled.img`
    width: 100%;
    height: 228px;
    object-fit: cover;
    border: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const ContainerCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 14px;
    background-color: #fff;
`

export const TitleCard = styled.h1`
    color: #0165CF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin-top: 14px;
`

export const ContainerContactCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width:470px;
    align-items: start;
    margin-top: 10px;
    gap: 10px;
    @media (max-width: 1180px) {
        width: 380px;
    }
    @media (max-width: 860px) {
        width: 320px;
    }
    @media (max-width: 768px) {
        width: 280px;
    }
    @media (max-width: 668px) {
        width: 330px;
    }
`

export const AdressCard = styled.a`
    color: #0165CF;
    text-decoration: none;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    line-height: 20px;
`

export const LinkImageWhatsIcon = styled.a`
    text-decoration: none;
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
    
`
export const ImageWhatsIcon = styled.img`
    width: 40px;
    height: 40px;
    @media (max-width: 1180px) {
        width: 30px;
        height: auto;
    }
`
