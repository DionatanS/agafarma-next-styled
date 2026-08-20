import {
  AvaliationLink,
  LogoFooter,
  ContainerIcons,
  ContainerFooter,
  ContainerFooterSecondary,
  DeliveryNote,
  Divider,
  ScheduleGrid,
  ScheduleItem,
  ScheduleLabel,
  ScheduleTime,
  ScheduleTitle,
  StoreName,
  StoreSchedule,
  TextFooter,
  WrapperFooter,
  WrapperRow,
  ContainerMobile,
} from "./styles";

const horariosDasLojas = [
  {
    nome: "Alvorada - Parada 47",
    segundaASabado: "7:30 às 23:59",
    domingosEFeriados: "9:00 às 22:00",
  },
  {
    nome: "Alvorada - Parada 51",
    segundaASabado: "7:30 às 23:59",
    domingosEFeriados: "9:00 às 22:00",
  },
  {
    nome: "Alvorada - Americana",
    segundaASabado: "7:00 às 22:00",
    domingosEFeriados: "9:00 às 20:00",
  },
  {
    nome: "Porto Alegre - Leopoldina",
    segundaASabado: "7:00 às 23:00",
    domingosEFeriados: "9:00 às 22:00",
  },
];

const iconeBase = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

const IconeRelogio = () => (
  <svg {...iconeBase}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const IconeLocal = () => (
  <svg {...iconeBase} style={{ flexShrink: 0 }}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconeCalendario = () => (
  <svg {...iconeBase} style={{ flexShrink: 0 }}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

const IconeEntrega = () => (
  <svg {...iconeBase} style={{ flexShrink: 0 }}>
    <path d="M2 7h11v8H2zM13 10h4l3 3v2h-7z" />
    <circle cx="6.5" cy="17.5" r="1.8" />
    <circle cx="16.5" cy="17.5" r="1.8" />
  </svg>
);

export default function Footer({ children }) {
  return (
    <>
      <ContainerFooter id="contact">
        <WrapperFooter>
          <WrapperRow>
            <LogoFooter src="/images/LogoFooter.png" alt="Logo Agafarma" />
            <AvaliationLink
              target="_blank"
              href="https://www.google.com/search?q=Agafarma+parada+47+em+Alvorada&oq=Agafarma+parada+47+em+Alvorada&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQcxMzVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x951975c65fe22691:0x3fd15078222b6df4,1,,,,"
              title="Clique aqui e nos avalie no Google"
            >
              NOS AVALIE AQUI!
            </AvaliationLink>
            <ContainerIcons>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063737311089&mibextid=avESrC"
                title="Entre na nossa página do facebook"
              >
                <img src="/images/icons/facebook.png" alt="Icone do facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/agafarmaalvorada/?igshid=NzZlODBkYWE4Ng%3D%3D"
                title="Entre na nossa página do Instagram"
              >
                <img src="/images/icons/insta.png" alt="Icone do instagran" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=555134115000"
                title="Entre no Whatsapp"
              >
                <img src="/images/icons/whats.png" alt="incone do whatsapp" />
              </a>
            </ContainerIcons>
          </WrapperRow>
          <Divider />

          <ScheduleTitle>
            <IconeRelogio />
            Horário de funcionamento
          </ScheduleTitle>

          <ScheduleGrid>
            {horariosDasLojas.map((loja) => (
              <StoreSchedule key={loja.nome}>
                <StoreName>
                  <IconeLocal />
                  {loja.nome}
                </StoreName>
                <ScheduleItem>
                  <ScheduleLabel>
                    <IconeCalendario />
                    Segunda a sábado
                  </ScheduleLabel>
                  <ScheduleTime>{loja.segundaASabado}</ScheduleTime>
                </ScheduleItem>
                <ScheduleItem>
                  <ScheduleLabel>
                    <IconeCalendario />
                    Domingos e feriados
                  </ScheduleLabel>
                  <ScheduleTime>{loja.domingosEFeriados}</ScheduleTime>
                </ScheduleItem>
              </StoreSchedule>
            ))}
          </ScheduleGrid>

          <Divider />

          <DeliveryNote>
            <IconeEntrega />
            Entregas terminam 30 minutos antes de fechar as lojas.
          </DeliveryNote>

          <ContainerMobile>
            <AvaliationLink
              href="https://www.google.com/search?q=Agafarma+parada+47+em+Alvorada&oq=Agafarma+parada+47+em+Alvorada&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQcxMzVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x951975c65fe22691:0x3fd15078222b6df4,1,,,,"
              title="click aqui para nos avaliar"
              style={{ display: "flex" }}
            >
              NOS AVALIE AQUI!
            </AvaliationLink>
            <ContainerIcons style={{ display: "flex" }}>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063737311089&mibextid=avESrC"
                title="Entre na nossa pagina do facebook"
              >
                <img src="/images/icons/facebook.png" alt="Icone do facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/agafarmaalvorada/?igshid=NzZlODBkYWE4Ng%3D%3D"
                title="?Entre na nossa pagina do Instagram"
              >
                <img src="/images/icons/insta.png" alt="Icone do instagran" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5551999590358"
                title="Entre no whatsapp"
              >
                <img src="/images/icons/whats.png" alt="incone do whatsapp" />
              </a>
            </ContainerIcons>
          </ContainerMobile>
        </WrapperFooter>
      </ContainerFooter>
      <ContainerFooterSecondary>
        <TextFooter>
          © Copyright{" "}
          <span
            style={{ fontWeight: "700", fontSize: "16px", color: "#EEEEEE" }}
          >
            Agafarma.
          </span>{" "}
          Todos os direitos reservados | Desenvolvido por{" "}
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5551982237199"
            style={{ color: "#FFD602", cursor: "pointer" }}
          >
            Desenvolve Aí
          </a>
        </TextFooter>
      </ContainerFooterSecondary>
    </>
  );
}
