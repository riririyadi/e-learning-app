import React from "react";
import { Switch, Route } from "react-router-dom";
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

const DoQuizRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/detail/do-quiz" component={DoQuiz} />
      <Route path="/u/classroom/detail/do-quiz/result" component={Result} />
    </Switch>
  );
};

const DoTaskRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/detail/do-task" component={DoTask} />
      <Route path="/u/classroom/detail/do-task/result" component={Result} />
    </Switch>
  );
};


const ClassInnerRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/detail" component={DetailClassroom} />
      <Route path="/u/classroom/detail/do-quiz">
        <DoQuizRoute />
      </Route>
      <Route path="/u/classroom/detail/do-task"><DoTaskRoute/></Route>
    </Switch>
  );
};

const ClassRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/" component={StudentClassroom} />
      <Route path="/u/classroom/detail">
        <ClassInnerRoute />
      </Route>
    </Switch>
  );
};
export const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/u/" component={Dashboard} />
      <Route path="/u/calendar" component={EventsCalendar} />
      <Route path="/u/classroom">
        <ClassRoute />
      </Route>
      <Route path="/u/search" component={SearchResult} />
      <Route path="/u/quiz" component={StudentQuiz} />
      <Route path="/u/task" component={StudentTask} />
      <Route path="/u/grade" component={Grade} />
      <Route path="/u/profile" component={Profile} />
      <Route path="/u/*" component={NotMatch} />
    </Switch>
  );
};

const ManageClassroomRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/manage" component={ManageClassroom} />
      <Route
        path="/u/classroom/manage/create-new-lesson"
        component={CreateNewLesson}
      />
      <Route
        path="/u/classroom/manage/edit-lesson"
        component={EditLesson}
      />
    </Switch>
  );
};

const TeacherClassRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/" component={Classroom} />
      <Route
        path="/u/classroom/create-new-one"
        component={CreateNewClassroom}
      />
        <Route
        path="/u/classroom/edit"
        component={EditClassroom}
      />
      <Route path="/u/classroom/manage">
        <ManageClassroomRoute />
      </Route>
    </Switch>
  );
};

const TeacherTaskRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/task/" component={Task} />
      <Route path="/u/task/create-new-task" component={CreateNewTask} />
        <Route
        path="/u/task/edit"
        component={EditTask}
      />
    </Switch>
  );
};

const TeacherQuizRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/quiz/" component={Quiz} />
      <Route path="/u/quiz/create-new-quiz" component={CreateNewQuiz} />
        <Route
        path="/u/quiz/edit"
        component={EditQuiz}
      />
    </Switch>
  );
};

const TeacherGradeRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/grade/" component={Grade} />
      <Route path="/u/grade/view" component={ViewGrade} />
    </Switch>
  );
};


export const TeacherRoutes = () => {
  return (
    <Switch>
      <Route exact path="/u/" component={Dashboard} />
      <Route path="/u/calendar" component={EventsCalendar} />
      <Route path="/u/classroom">
        <TeacherClassRoute />
      </Route>
      <Route path="/u/search" component={SearchResult} />
      <Route path="/u/quiz"><TeacherQuizRoute />
      </Route>
      <Route path="/u/task">
        <TeacherTaskRoute />
      </Route>
      <Route path="/u/grade" ><TeacherGradeRoute /></Route>
      <Route path="/u/profile" component={Profile} />
      <Route path="/u/*" component={NotMatch} />
    </Switch>
  );
};
