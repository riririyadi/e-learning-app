import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { LayoutContext } from "./NewLayout";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {Loader} from "./Loader"
import axios from "axios";


const localizer = momentLocalizer(moment);

export default function EventsCalendar(props) {

const [calendar, setCalendar] = useState([]);
const [error, setError] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const getAllClassroom = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get("http://elearning.havicrm.tk/api/calendar", {
        headers: header,
      });
      setCalendar(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message)
    }
    setIsLoading(false);
  };


  useEffect(() => {
 document.title = "E-learning | Calendar"
  }, [])

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
    {  isLoading? <div className="main-area-center-loader"><Loader/></div>: (
 <>   <div>  {error && <div className="centering">{error}</div>}</div>
    <div  className={isDarkMode ? "bg-darks shadow-sm" : "bg-white shadow-sm"}
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
          </div></>)}
    </div>
  );
}
