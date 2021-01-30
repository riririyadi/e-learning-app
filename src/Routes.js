import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EventsCalendar from "./components/Calendar";
import Classroom from "./components/Classroom";
import ManageClassroom from "./components/ManageClassroom";
import CreateNewClassroom from "./components/CreateNewClassroom";
import CreateNewTask from "./components/CreateNewTask";
import CreateNewQuiz from "./components/CreateNewQuiz";
import CreateNewLesson from "./components/CreateNewLesson";
import StudentClassroom from "./components/StudentClassroom";
import DetailClassroom from "./components/DetailClassroom";
import Quiz from "./components/Quiz";
import EditQuiz from "./components/EditQuiz";
import EditProfile from "./components/EditProfile";
import StudentQuiz from "./components/StudentQuiz";
import NotMatch from "./components/NotMatch";
import Result from "./components/Result";
import Profile from "./components/Profile";
import Task from "./components/Task";
import EditTask from "./components/EditTask";
import EditLesson from "./components/EditLesson";
import StudentTask from "./components/StudentTask";
import Grade from "./components/Grade";
import ViewGrade from "./components/ViewGrade";
import DoQuiz from "./components/DoQuiz";
import DoTask from "./components/DoTask";
import SearchResult from "./components/SearchResult";
import EditClassroom from "./components/EditClassroom"



function DoTaskRoute() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={DoTask} />
      <Route path={`${match.path}/result`} component={Result} />
    </Switch>
  );
};



function DoQuizRoute() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={DoQuiz} />
      <Route path={`${match.path}/result`} component={Result} />
    </Switch>
  );
};


function ClassInnerRoute() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={DetailClassroom} />
      <Route path={`${match.path}/do-quiz/:id`} ><DoQuizRoute /></Route>
      <Route path={`${match.path}/do-task/:id`}><DoTaskRoute/></Route>
    </Switch>
  );
};

function ClassRoute() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={StudentClassroom} />
      <Route path={`${match.path}/:id`}>
        <ClassInnerRoute />
      </Route>
    </Switch>
  );
};
export function StudentRoutes() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Dashboard} />
      <Route path={`${match.path}/calendar`} component={EventsCalendar} />
      <Route path={`${match.path}/classroom`}>
        <ClassRoute />
      </Route>
      <Route path={`${match.path}/search`} component={SearchResult} />
      <Route path={`${match.path}/quiz`} component={StudentQuiz} />
      <Route path={`${match.path}/task`} component={StudentTask} />
      <Route path={`${match.path}/grade`} component={Grade} />
      <Route path={`${match.path}/profile`}><ProfileRoute/></Route>
      <Route path={`${match.path}/*`}component={NotMatch} />
    </Switch>
  );
};

function ManageClassroomRoute() {
   const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ManageClassroom} />
      <Route
        path={`${match.path}/create-new-lesson`}
        component={CreateNewLesson}
      />
      <Route
        path={`${match.path}/edit-lesson/:id`}
        component={EditLesson}
      />
    </Switch>
  );
};

function TeacherClassRoute() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Classroom} />
      <Route
        path={`${match.path}/create-new-one`}
        component={CreateNewClassroom}
      />
        <Route
        path={`${match.path}/edit/:id`}
        component={EditClassroom}
      />
      <Route path={`${match.path}/:id/manage`}>
        <ManageClassroomRoute />
      </Route>
    </Switch>
  );
};

function TeacherTaskRoute() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact  path={`${match.path}`} component={Task} />
      <Route path={`${match.path}/create-new-task`} component={CreateNewTask} />
        <Route
       path={`${match.path}/edit/:id`}
        component={EditTask}
      />
    </Switch>
  );
};

function TeacherQuizRoute() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Quiz} />
      <Route path={`${match.path}/create-new-quiz`} component={CreateNewQuiz} />
        <Route
         path={`${match.path}/edit/:id`}
        component={EditQuiz}
      />
    </Switch>
  );
};

function TeacherGradeRoute() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact  path={`${match.path}`} component={Grade} />
      <Route ppath={`${match.path}/view`} component={ViewGrade} />
    </Switch>
  );
};

function ProfileRoute() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Profile} />
      <Route path={`${match.path}/edit`} component={EditProfile} />
    </Switch>
  );
};



export function TeacherRoutes(){
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Dashboard} />
      <Route path={`${match.path}/calendar`} component={EventsCalendar} />
      <Route  path={`${match.path}/classroom`}>
        <TeacherClassRoute />
      </Route>
      <Route  path={`${match.path}/search`} component={SearchResult} />
      <Route  path={`${match.path}/quiz`}><TeacherQuizRoute />
      </Route>
      <Route  path={`${match.path}/task`}>
        <TeacherTaskRoute />
      </Route>
      <Route  path={`${match.path}/grade`} ><TeacherGradeRoute /></Route>
      <Route path={`${match.path}/profile`}><ProfileRoute /></Route>
      <Route  path={`${match.path}/*`} component={NotMatch} />
    </Switch>
  );
};