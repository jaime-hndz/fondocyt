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
import { UsuarioScreen } from "@/screens/public/tools/UsuarioScreen";
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
  Person,
} from "@mui/icons-material";

export const NavItems = [
  {
    icon: Terrain,
    title: "Ordenamiento Territorial",
    route: "ordenamiento_territorial",
    element: OrdenamientoTerritorialScreen,
  },
  {
    icon: Map,
    title: "Geovisor",
    route: "geovisor",
    element: GeovisorScreen,
  },

  {
    icon: Info,
    title: "Información General BDH",
    route: "info_bdh",
    element: InfoBDHScreen,
  },
  {
    icon: NotificationImportant,
    title: "Gestión de Riesgos",
    route: "gestion_riesgos",
    element: GestionRiesgosScreen,
  },
  {
    icon: Gavel,
    title: "Normativa",
    route: "normativa",
    element: NormativaScreen,
  },
  {
    icon: MedicalInformation,
    title: "Servicios",
    route: "servicios",
    element: ServiciosScreen,
  },
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
  {
    icon: AddModerator,
    title: "Transparencia",
    route: "transparencia",
    element: TransparenciaScreen,
  },
  {
    icon: Person,
    title: "Usuario",
    route: "usuario",
    element: UsuarioScreen,
  },
  {
    icon: ContactSupport,
    title: "Contacto",
    route: "contacto",
    element: ContactoScreen,
  },
];
