import styled from "styled-components";
import Image from "next/image";

export const ContainerHero = styled.div`
  width: 100vw;
  max-width: 100%;
  height: auto;
  position: relative;
`;

export const HeroImageStiled = styled(Image)``;
export const ContainerButtons = styled.div`
  position: absolute;
  display: flex;
  gap: 30px;
  bottom: 6%;
  left: 3%;
  @media (max-width: 980px) {
    gap: 18px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
  @media (max-width: 668px) {
    gap: 18px;
    width: 100%;
    justify-content: center;
    left: 0;
  }
  @media (max-width: 420px) {
    gap: 12px;
  }
`;

export const ButtonHeroStyled = styled.a`
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 170px;
  padding: 0 24px;
  height: 70px;
  white-space: nowrap;
  background-color: #ffce0c;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1520px) {
    min-width: 140px;
    padding: 0 20px;
    height: 60px;
    font-size: 16px;
  }
  @media (max-width: 1180px) {
    height: 50px;
  }
  @media (max-width: 980px) {
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
  }
  @media (max-width: 768px) {
    min-width: 105px;
    padding: 0 12px;
    font-size: 14px;
    gap: 5px;
    height: 35px;
  }
  @media (max-width: 668px) {
    min-width: 105px;
    padding: 0 12px;
    font-size: 14px;
    gap: 5px;
    height: 30px;
  }
  @media (max-width: 420px) {
    min-width: 0;
    padding: 0 8px;
    font-size: 12px;
    gap: 5px;
    height: 25px;
  }
`;
export const ImageButton = styled.img`
  width: 30px;
  height: auto;
  @media (max-width: 980px) {
    width: 20px;
    height: auto;
  }
`;
