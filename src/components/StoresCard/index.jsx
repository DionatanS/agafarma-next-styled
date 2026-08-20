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
}) {
  const [exibirMapa, setExibirMapa] = useState(false);

  const somenteDigitos = (numero) => String(numero ?? "").replace(/\D/g, "");

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
          <ButtonMap
            title={`Clique aqui para ver a loja ${Title} no mapa.`}
            onClick={exibirNoMapa}
          >
            Ver no Mapa
          </ButtonMap>
          <ContainerImage
            title={`Fachada da loja Agafarma ${Title}.`}
            alt={`Fachada da loja Agafarma ${Title}.`}
            src={`images/${hrefImage}`}
          />
          <ContainerCardInfo>
            <TitleCard>{Title}</TitleCard>
            <ContainerContactCard>
              <AdressCard
                target="_blank"
                href={`${hrefMap}`}
                title={`Clique aqui para abrir o endereço da loja ${Title} no Google Maps.`}
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
                  title={`Clique aqui para ligar para a loja ${Title}.`}
                  style={{ color: "#0165CF" }}
                  href={`tel:${somenteDigitos(PhoneNumHref)}`}
                >
                  {Phone}
                </a>
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
                  title={`Clique aqui para falar conosco pelo WhatsApp da loja ${Title}.`}
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=${WhatsAppNumHref}`}
                  style={{ color: "#0165CF" }}
                >
                  {WhatsApp}
                </a>
              </span>
              <LinkImageWhatsIcon
                target="_blank"
                title={`Clique aqui para falar conosco pelo WhatsApp da loja ${Title}.`}
                href={`https://api.whatsapp.com/send?phone=${WhatsAppNumHref}`}
              >
                <ImageWhatsIcon
                  alt={`Ícone do WhatsApp da loja ${Title}.`}
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
            title={`Mapa com a localização da loja Agafarma ${Title}.`}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <ButtonMap
            title={`Clique aqui para voltar aos dados da loja ${Title}.`}
            onClick={voltar}
          >
            Voltar
          </ButtonMap>
        </ContainerCard>
      )}
    </>
  );
}
