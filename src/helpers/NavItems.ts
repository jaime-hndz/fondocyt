import { AboutScreen } from "@/screens/public/about/AboutScreen";
import { BajosHainaScreen } from "@/screens/public/info/BajosHainaScreen";
// import { BibliotecaScreen } from "@/screens/public/info/BibliotecaScreen";
import { HistoriaScreen } from "@/screens/public/info/HistoriaScreen";
import { ServiciosScreen } from "@/screens/public/info/ServiciosScreen";
import { EventosScreen } from "@/screens/public/tools/EventosScreen";
import { NormativaScreen } from "@/screens/public/tools/NormativaScreen";
import { ParticipacionCiudadanaScreen } from "@/screens/public/tools/ParticipacionCiudadanaScreen";
// import { ContactoScreen } from "@/screens/public/tools/ContactoScreen";
// import { EventosScreen } from "@/screens/public/tools/EventosScreen";
// import { GeovisorScreen } from "@/screens/public/tools/GeovisorScreen";
// import { GestionRiesgosScreen } from "@/screens/public/tools/GestionRiesgosScreen";
// import { InfoBDHScreen } from "@/screens/public/tools/InfoBDHScreen";
// import { NormativaScreen } from "@/screens/public/tools/NormativaScreen";
// import { OrdenamientoTerritorialScreen } from "@/screens/public/tools/OrdenamientoTerritorialScreen";
// import { ParticipacionCiudadanaScreen } from "@/screens/public/tools/ParticipacionCiudadanaScreen";
// import { ParticipacionComunitariaScreen } from "@/screens/public/tools/ParticipacionComunitariaScreen";
// import { ServiciosScreen } from "@/screens/public/tools/ServiciosScreen";
// import { TransparenciaScreen } from "@/screens/public/tools/TransparenciaScreen";
import {
  Map,
  Terrain,
  Info,
  NotificationImportant,
  Gavel,
  MedicalInformation,
  People,
  HomeWork,
  Event,
  AddModerator,
  ContactSupport,
  LocalLibrary,
  LibraryBooks
  
} from "@mui/icons-material";

export const NavItems = [
  {
    icon: LocalLibrary,
    title: "Nosotros",
    children: [
      {
        icon: LocalLibrary,
        title: "¿Qué es el observatorio?",
        route: "acerca",
        element: AboutScreen,
          
      }
    ]
  },
  {
    icon: Info,
    title: "Información",
    children: [
      {
        icon: Info,
        title: "Bajos de Haina",
        route: "info_bdh",
        element: BajosHainaScreen
      },
      {
        icon: Gavel,
        title: "Historia",
        route: "Historia",
        element: HistoriaScreen
      },
      {
        icon: MedicalInformation,
        title: "Servicios",
        route: "servicios",
        element: ServiciosScreen
      },
      {
        icon: LibraryBooks,
        title: "Biblioteca",
        route: "biblioteca",
      },

    ]
  },
  {
    icon: Terrain,
    title: "Ordenamiento",
    children: [
      {
        icon: Terrain,
        title: "Ordenamiento Territorial",
        route: "ordenamiento_territorial",
          
      },
      {
        icon: Gavel,
        title: "Normativa",
        route: "normativa",
        element: NormativaScreen
      },

    ]
  },
  {
    icon: Map,
    title: "Geovisor",
    children: [
      {
        icon: Terrain,
        title: "Caracterización socioeconómica ",
        route: "geovisor",
      },
      {
        icon: Terrain,
        title: "Caracterización fisica",
        route: "geovisor2",
      },
      {
        icon: Terrain,
        title: "Gestión de riesgos",
        route: "geovisor3",
      },
      {
        icon: Terrain,
        title: "Ordenamiento territorial",
        route: "geovisor4",
      }
    ]
  },


  {
    icon: NotificationImportant,
    title: "Riesgos",
    children: [
      {
        icon: NotificationImportant,
        title: "Gestión de Riesgos",
        route: "gestion_riesgos",
      },
    ]
  },
  {
    icon: People,
    title: "Participación ",
    children: [
      {
        icon: People,
        title: "Participación Ciudadana",
        route: "participacion_ciudadana",
        element: ParticipacionCiudadanaScreen

      },
      {
        icon: HomeWork,
        title: "Participación Comunitaria",
        route: "participacion_comunitaria",
      },
      {
        icon: Event,
        title: "Eventos",
        route: "eventos",
        element: EventosScreen
      },
    ]
  },

  {
    icon: AddModerator,
    title: "Transparencia",
    children: [
      {
        icon: AddModerator,
        title: "Transparencia",
        route: "transparencia",
      },
    ]
  },
  {
    icon: ContactSupport,
    title: "Contacto",
    children: [
      {
        icon: ContactSupport,
        title: "Contacto",
        route: "contacto",
      },
    ]
  },
];
