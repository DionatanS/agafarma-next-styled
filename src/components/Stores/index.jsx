import StoresCard from "../StoresCard";
import { ContainerCard } from "../StoresCard/styles";
import styles from "../../globalCss/styles.module.css";
import {
  ContainerStores,
  ContainerStoresInfo,
  ParagraphStyled,
  TitleStyled,
} from "./styles";

export default function Stores({ children }) {
  return (
    <ContainerStores>
      <a className={styles.anchor} id="stores"></a>
      <TitleStyled>Nossas lojas</TitleStyled>
      <ContainerStoresInfo>
        <StoresCard
          hrefMap="https://goo.gl/maps/By4YMixpdT1dtSjK8"
          hreflinkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.246665350064!2d-51.079031699999994!3d-30.0010729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975c65fe22691%3A0x3fd15078222b6df4!2sAgafarma%20parada%2047%20em%20Alvorada!5e0!3m2!1spt-BR!2sbr!4v1687814861336!5m2!1spt-BR!2sbr"
          hrefImage="parada47.webp"
          Title="Alvorada - Parada 47"
          Adress="Av. Pres. Getúlio Vargas, 1926 - Bela Vista, Alvorada - RS"
          Phone="(51) 3411-5000"
          PhoneNumHref="5134115000"
          WhatsApp="(51) 9 9959-0358"
          WhatsAppNumHref="5551999590358"
        />
        <StoresCard
          hrefMap="https://goo.gl/maps/yPiatj2e9Jqc5cAQ9"
          hreflinkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.418013634361!2d-51.0712696!3d-29.9961514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979aba127bd4d%3A0x53a983a433e858ff!2sAgafarma%2051!5e0!3m2!1spt-BR!2sbr!4v1687814895172!5m2!1spt-BR!2sbr"
          hrefImage="parada51.webp"
          Title="Alvorada - Parada 51"
          Adress="Av. Pres. Getúlio Vargas, 2888 - Bela Vista, Alvorada - RS"
          Phone="(51) 3411-5000"
          PhoneNumHref="5134115000"
          WhatsApp="(51) 9 9959-0358"
          WhatsAppNumHref="5551999590358"
        />
        <StoresCard
          hrefMap="https://goo.gl/maps/1tH7cvD47aXbfqGt7"
          hreflinkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.559884573749!2d-51.082916000000004!3d-29.992076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975cd03a6cd6d%3A0x6ab423fe8ed1865a!2sAgafarma%20da%20Americana!5e0!3m2!1spt-BR!2sbr!4v1687814662003!5m2!1spt-BR!2sbr"
          hrefImage="americana.webp"
          Title="Alvorada - Americana"
          Adress="R. Tibúrcio de Azevedo, 573 - Americana, Alvorada - RS"
          Phone="(51) 3411-5000"
          PhoneNumHref="5134115000"
          WhatsApp="(51) 9 9959-0358"
          WhatsAppNumHref="5551999590358"
        />
        <StoresCard
          hrefMap="https://www.google.com/maps/search/?api=1&query=Agafarma%20Leopoldina%20130"
          hreflinkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.5431165756163!2d-51.10805759999999!3d-30.021272699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951976125e0de6c5%3A0x91ce256ded2ce1cd!2sAgafarma%20Leopoldina%20130!5e0!3m2!1spt-BR!2sbr!4v1787184051394!5m2!1spt-BR!2sbr"
          hrefImage="leopoldina.webp"
          Title="Porto Alegre - Leopoldina"
          Adress="Av. Juscelino Kubitschek de Oliveira, 1173 - Jardim Dona Leopoldina, Porto Alegre - RS"
          Phone="(51) 3366-2477"
          PhoneNumHref="5133662477"
          WhatsApp="(51) 98432-7210"
          WhatsAppNumHref="5551984327210"
        />
      </ContainerStoresInfo>
    </ContainerStores>
  );
}
