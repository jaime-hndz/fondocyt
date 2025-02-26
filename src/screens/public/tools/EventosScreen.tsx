import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es"

dayjs.locale("es")
const localizer = dayjsLocalizer(dayjs);
export const EventosScreen = () => {

  const events = [
    {
      start: dayjs("2025-02-27T11:00:00").toDate(),
      end: dayjs("2025-02-27T12:00:00").toDate(),
      title: "Reunión Fondocyt"
    }
  ]
  
  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={{
          allDay: "Todo el día",
          previous: "Anterior",
          next: "Siguiente",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "Sin eventos",
        }}
      />
    </>
  );
};
