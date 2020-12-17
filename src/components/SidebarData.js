import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/u',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Classroom',
    path: '/u/classroom',
    icon: <FaIcons.FaClinicMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Task',
    path: '/u/task',
    icon: <FaIcons.FaTasks />,
    cName: 'nav-text'
  },
  {
    title: 'Quiz',
    path: '/u/quiz',
    icon: <FaIcons.FaDiceD6 />,
    cName: 'nav-text'
  },
  {
    title: 'Grade',
    path: '/u/grade',
    icon: <FaIcons.FaUserEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/u/calendar',
    icon: <FaIcons.FaCalendarAlt />,
    cName: 'nav-text'
  }
];