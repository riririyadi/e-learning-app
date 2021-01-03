import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { LayoutContext } from "./NewLayout";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

export default function EventsCalendar(props) {
  const { isDarkMode } = useContext(LayoutContext);
  const myEventsList = [
    {
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2020, 11, 1, 0),
      end: new Date(2020, 11, 2, 2),
    },
  ];

  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <h5 className="mb-4">
        <b>Calendar</b>
      </h5>
      <div
        className={isDarkMode ? "bg-darks shadow-sm" : "bg-white shadow-sm"}
        style={{
          borderRadius: "10px",
          padding: "50px",
          height: "600px",
          zIndex: 0,
        }}
      >
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}
