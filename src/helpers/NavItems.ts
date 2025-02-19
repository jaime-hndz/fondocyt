import { ContactoScreen } from "@/screens/public/tools/ContactoScreen";
import { EventosScreen } from "@/screens/public/tools/EventosScreen";
import { GeovisorScreen } from "@/screens/public/tools/GeovisorScreen";
import { GestionRiesgosScreen } from "@/screens/public/tools/GestionRiesgosScreen";
import { InfoBDHScreen } from "@/screens/public/tools/InfoBDHScreen";
import { NormativaScreen } from "@/screens/public/tools/NormativaScreen";
import { OrdenamientoTerritorialScreen } from "@/screens/public/tools/OrdenamientoTerritorialScreen";
import { ParticipacionCiudadanaScreen } from "@/screens/public/tools/ParticipacionCiudadanaScreen";
import { ParticipacionComunitariaScreen } from "@/screens/public/tools/ParticipacionComunitariaScreen";
import { ServiciosScreen } from "@/screens/public/tools/ServiciosScreen";
import { TransparenciaScreen } from "@/screens/public/tools/TransparenciaScreen";
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
        element: OrdenamientoTerritorialScreen,
          
      },
      {
        icon: LocalLibrary,
        title: "Fines",
        route: "fines",
        element: OrdenamientoTerritorialScreen,
          
      },
      {
        icon: LocalLibrary,
        title: "Valores",
        route: "valores",
        element: OrdenamientoTerritorialScreen,
          
      },
      {
        icon: LocalLibrary,
        title: "Participantes",
        route: "participantes",
        element: OrdenamientoTerritorialScreen,
          
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
        element: OrdenamientoTerritorialScreen,
          
      },
      {
        icon: Gavel,
        title: "Normativa",
        route: "normativa",
        element: NormativaScreen,
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
        element: GeovisorScreen,
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
        element: InfoBDHScreen,
      },
      {
        icon: Gavel,
        title: "Historia",
        route: "Historia",
        element: NormativaScreen,
      },
      {
        icon: MedicalInformation,
        title: "Servicios",
        route: "servicios",
        element: ServiciosScreen,
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
        element: GestionRiesgosScreen,
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
        element: ParticipacionCiudadanaScreen,
      },
      {
        icon: HomeWork,
        title: "Participación Comunitaria",
        route: "participacion_comunitaria",
        element: ParticipacionComunitariaScreen,
      },
      {
        icon: Event,
        title: "Eventos",
        route: "eventos",
        element: EventosScreen,
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
        element: TransparenciaScreen,
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
        element: ContactoScreen,
      },
    ]
  },
];
