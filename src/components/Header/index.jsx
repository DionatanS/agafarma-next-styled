import { useState } from "react";
import styles from "./styles.module.css";

export default function Header() {
  const [isSobreClicked, setIsSobreClicked] = useState(true);

  const handleSobreClick = () => {
    setIsSobreClicked(true);
  };

  const handleNavItemClick = () => {
    setIsSobreClicked(false);
  };

  return (
    <div className={styles.containerHeader}>
      <div className={styles.headerPrimaryStyled}>
        <div></div>
        <div className={styles.cointanerLinks}>
          <a
            title="click aqui para fazer seu encarte Online"
            href="https://www.agafarma.com.br/Site/Encarte"
            target="_blank"
            style={{ color: "#fff" }}
          >
            Encarte Online
          </a>
          <div className={styles.separator} />
          <a
            title="click aqui para Cartão pessoa fisica"
            href="https://agafarma.com.br/CartaoAgafarma/Cartao-de-Credito-Agafarma"
            target="_blank"
            style={{ color: "#fff" }}
          >
            Cartão Pessoa Física
          </a>
        </div>
      </div>

      <div className={styles.headerSecondary}>
        <a title="logo header" href="#hero">
          <img
            className={styles.logoHeader}
            style={{ cursor: "pointer" }}
            src="/images/logo.png"
            alt="Logo Header"
          />
        </a>
        <nav>
          <ul className={styles.navUl}>
            <li className={styles.navUlLi}>
              <a
                title="Click aqui para ir para inicio"
                href={isSobreClicked ? "/#hero" : "/#hero"}
                className={styles.link}
                onClick={handleNavItemClick}
              >
                INICIO
              </a>
            </li>
            <li className={styles.navUlLi}>
              <a
                title="Click aqui para ir para lojas"
                href={isSobreClicked ? "/#stores" : "/#stores"}
                className={styles.link}
                onClick={handleNavItemClick}
              >
                LOJAS
              </a>
            </li>
            <li className={styles.navUlLi}>
              <a
                title="Click aqui para ir para contato"
                href={isSobreClicked ? "/#contact" : "/#contact"}
                className={styles.link}
                onClick={handleNavItemClick}
              >
                CONTATO
              </a>
            </li>
            <li className={styles.navUlLi}>
              <a
                title="Click aqui para ir para sobre"
                href={isSobreClicked ? "/about" : "/about"}
                className={styles.link}
                onClick={handleSobreClick}
              >
                SOBRE
              </a>
            </li>
            <li id="icon" className={styles.navUlLi}>
              <a
                title="Click aqui para ir para o facebook"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063737311089&mibextid=avESrC"
                className={styles.link}
              >
                <img src="/images/icons/facebook.png" alt="Icone do facebook" />
              </a>
            </li>
            <li id="icon" className={styles.navUlLi}>
              <a
                title="Click aqui para ir para o instagram"
                target="_blank"
                href="https://www.instagram.com/agafarmaalvorada/?igshid=NzZlODBkYWE4Ng%3D%3D"
                className={styles.link}
              >
                <img src="/images/icons/insta.png" alt="Icone do instagram" />
              </a>
            </li>
            <li id="icon" className={styles.navUlLi}>
              <a
                title="Click aqui para ir para o whatsapp"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=555134115000"
                className={styles.link}
              >
                <img src="/images/icons/whats.png" alt="Icone do whatsapp" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
