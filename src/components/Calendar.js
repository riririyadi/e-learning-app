import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';


export default function Calendar(){

  const handleDateClick = (arg) =>{
    alert(arg.dateStr)
  }
    return (
      <div style={{ position: 'relative',
    zIndex: 0}}>
      <h5 className="mt-4 mb-4">Calendar</h5>
      <div className="p-4 bg-white" style={{borderRadius:"10px"}}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        defaultView="dayGridMonth"
        headerToolbar={{
          left:'prev next today',
          center:'title',
          right:'dayGridMonth dayGridWeek dayGridDay'
        }}
          dateClick={handleDateClick}
        events={[
          { title: "event 1", date: "2020-12-09" },
          { title: "event 2", date: "2020-12-15" },
          { title: "event 3", date: "2020-12-16" },
          { title: "event 4", date: "2020-12-19" },
          { title: "event 5", date: "2020-12-20" },
        ]}
      />
      </div>
      </div>
    );
  
}
