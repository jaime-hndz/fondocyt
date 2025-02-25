import { AboutScreen } from "@/screens/public/about/AboutScreen";
import { ParticipantsScreen } from "@/screens/public/about/ParticipantsScreen";
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
  LocalLibrary
  
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
          
      },
      {
        icon: LocalLibrary,
        title: "Fines",
        route: "fines",
          
      },
      {
        icon: LocalLibrary,
        title: "Valores",
        route: "valores",
          
      },
      {
        icon: LocalLibrary,
        title: "Participantes",
        route: "participantes",
        element: ParticipantsScreen,
          
      },

    ]
  },
  {
    icon: Terrain,
    title: "Ordenamiento Territorial",
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
      },

    ]
  },
  {
    icon: Map,
    title: "Geovisor",
    children: [
      {
        icon: Map,
        title: "Geovisor",
        route: "geovisor",
      }
    ]
  },

  {
    icon: Info,
    title: "Información General",
    children: [
      {
        icon: Info,
        title: "Bajos de Haina",
        route: "info_bdh",
      },
      {
        icon: Gavel,
        title: "Historia",
        route: "Historia",
      },
      {
        icon: MedicalInformation,
        title: "Servicios",
        route: "servicios",
      },

    ]
  },
  {
    icon: NotificationImportant,
    title: "Gestión de Riesgos",
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
