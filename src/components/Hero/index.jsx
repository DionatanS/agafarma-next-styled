import {
  ButtonHeroStyled,
  ContainerButtons,
  ContainerHero,
  HeroImageStiled,
  ImageButton,
} from "./styles";
import styles from "../../globalCss/styles.module.css";
import banner from "../../../public/images/banner-desktop.webp";

export default function Hero({ children }) {
  return (
    <ContainerHero>
      <a className={styles.anchor} id="hero"></a>
      <HeroImageStiled
        src={banner}
        alt="imagem do hero"
        width={banner.width}
        height={banner.height}
        priority="false"
      />
      <ContainerButtons>
        <ButtonHeroStyled
          title="Clique aqui para falar conosco pelo WhatsApp de Alvorada."
          href="https://api.whatsapp.com/send?phone=555134115000"
          target="_blank"
        >
          <ImageButton
            src="/images/icons/whatsapp-btn.png"
            alt="Clique aqui para falar conosco pelo WhatsApp de Alvorada."
          />{" "}
          Alvorada
        </ButtonHeroStyled>
        <ButtonHeroStyled
          title="Clique aqui para falar conosco pelo WhatsApp de Porto Alegre Zona Norte"
          href="https://api.whatsapp.com/send?phone=5551984327210"
          target="_blank"
        >
          <ImageButton
            src="/images/icons/whatsapp-btn.png"
            alt="Clique aqui para falar conosco pelo WhatsApp de Porto Alegre Zona Norte"
          />{" "}
          Porto Alegre Zona Norte
        </ButtonHeroStyled>
      </ContainerButtons>
    </ContainerHero>
  );
}
