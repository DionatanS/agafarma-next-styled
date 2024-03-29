import { useState } from "react";
import {
  AdressCard,
  ButtonMap,
  ContainerCard,
  ContainerCardInfo,
  ContainerContactCard,
  ContainerImage,
  ImageWhatsIcon,
  LinkImageWhatsIcon,
  TitleCard,
} from "./styles";

export default function StoresCard({
  Title,
  Phone,
  WhatsApp,
  nameImage,
  Adress,
  WhatsAppNumHref,
  PhoneNumHref,
  hrefMap,
  hrefImage,
  hreflinkMap,
  ourPhoneNumHref,
  ourPhone,
}) {
  const [exibirMapa, setExibirMapa] = useState(false);

  const exibirNoMapa = () => {
    setExibirMapa(true);
  };

  const voltar = () => {
    setExibirMapa(false);
  };

  return (
    <>
      {!exibirMapa ? (
        <ContainerCard>
          <ButtonMap title="click aqui para ver no mapa" onClick={exibirNoMapa}>
            Ver no Mapa
          </ButtonMap>
          <ContainerImage
            title="Imagem da loja agafarma"
            src={`images/${hrefImage}`}
          />
          <ContainerCardInfo>
            <TitleCard>{Title}</TitleCard>
            <ContainerContactCard>
              <AdressCard
                target="_blank"
                href={`${hrefMap}`}
                title="click aqui para ir para o nosso endereço"
              >
                {Adress}
              </AdressCard>
              <span
                style={{
                  color: "#444444",
                  fontSize: "14px",
                  fontFamily: "Open Sans",
                }}
              >
                Telefone:{" "}
                <a
                  title="click aqui e nos ligue"
                  style={{ color: "#0165CF" }}
                  href={`tel:${PhoneNumHref}`}
                >
                  {Phone}
                </a>
                , <a href={`tel:${ourPhoneNumHref}`}>{ourPhoneNumHref}</a>
              </span>
              <span
                style={{
                  color: "#444444",
                  fontSize: "14px",
                  fontFamily: "Open Sans",
                }}
              >
                WhatsApp:{" "}
                <a
                  title="click aqui e fale com nós no whatsapp"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=${WhatsAppNumHref}`}
                  style={{ color: "#0165CF" }}
                >
                  {WhatsApp}
                </a>
              </span>
              <LinkImageWhatsIcon
                target="_blank"
                title="click aqui para entrar no whatsapp"
                href={`https://api.whatsapp.com/send?phone=${WhatsAppNumHref}`}
              >
                <ImageWhatsIcon
                  alt="icone do whatsapp"
                  src="/images/icons/whatsAppCard.png"
                />
              </LinkImageWhatsIcon>
            </ContainerContactCard>
          </ContainerCardInfo>
        </ContainerCard>
      ) : (
        <ContainerCard>
          <iframe
            width="100%"
            height="100%"
            src={`${hreflinkMap}`}
            allowFullScreen
          ></iframe>
          <ButtonMap title="click aqui para voltar" onClick={voltar}>
            Voltar
          </ButtonMap>
        </ContainerCard>
      )}
    </>
  );
}
