import styled from 'styled-components'

export const ContainerFooter = styled.div`
    background-color: #F1F1F1;
    width: 100%;
    height: 100%;
    /* margin-top: 35px; */
    display: flex;
    justify-content: center;
    padding-bottom: 35px;
    /* @media (max-width: 668px) {
        height: 100%;
    } */
`

export const WrapperFooter = styled.div`
    width: 1060px;
    padding-inline: 30px;
    max-width: 1060px;
    font-family: 'Open Sans';    
    
`

export const WrapperRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;  
  @media (max-width: 668px) {
        justify-content: center;
    }
`;

export const LogoFooter = styled.img`
    width: 250px;
    height: auto;
    @media (max-width: 780px) {
        width: 200px;
        height: auto;
    }
`

export const AvaliationLink = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #01649C;
    cursor: pointer;
    @media (max-width: 780px) {
        font-size: 20px;
    }
    @media (max-width: 668px) {
        display: none;
    }
`
export const ContainerIcons = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 668px) {
        display: none;
    }
`
export const Divider = styled.hr`
    border: none;
    border-top: 1px solid #DDDDDD;
    margin-top: 32px;
`

export const ScheduleTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 28px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #01649C;
    @media (max-width: 668px) {
        font-size: 16px;
    }
`

export const ScheduleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 28px;
    @media (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 28px;
    }
    @media (max-width: 668px) {
        grid-template-columns: 1fr;
        row-gap: 24px;
    }
`

export const StoreSchedule = styled.div`
    padding-inline: 16px;
    border-left: 1px solid #DDDDDD;
    &:nth-child(4n + 1) {
        border-left: none;
    }
    @media (max-width: 980px) {
        &:nth-child(4n + 1) {
            border-left: 1px solid #DDDDDD;
        }
        &:nth-child(2n + 1) {
            border-left: none;
        }
    }
    @media (max-width: 668px) {
        padding-inline: 0;
        text-align: center;
        border-left: none;
        &:nth-child(2n + 1),
        &:nth-child(4n + 1) {
            border-left: none;
        }
    }
`

export const StoreName = styled.h3`
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #01649C;
    /* Reserva duas linhas para que os horarios das quatro colunas
       fiquem alinhados mesmo quando um nome quebra de linha. */
    min-height: 40px;
    @media (max-width: 980px) {
        min-height: 0;
    }
    @media (max-width: 668px) {
        justify-content: center;
    }
`

export const ScheduleItem = styled.div`
    margin-top: 16px;
`

export const ScheduleLabel = styled.p`
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
    color: #283D50;
    @media (max-width: 668px) {
        justify-content: center;
    }
`

export const ScheduleTime = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    color: #444444;
    margin-top: 4px;
    padding-left: 24px;
    @media (max-width: 668px) {
        padding-left: 0;
    }
`

export const DeliveryNote = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 28px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    color: #444444;
    text-align: center;
    @media (max-width: 668px) {
        font-size: 14px;
    }
`

export const ContainerFooterSecondary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84px;
    background: #00428A;
    width: 100%;
    padding-block: 10px;
`
export const TextFooter = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #EEEEEE;    
    padding-inline: 30px;
    line-height: 20px;
    @media (max-width: 668px) {
        text-align: center;
    }
`

export const ContainerMobile = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-top: 48px;
    @media (max-width: 668px) {
        display: flex;
    }
`