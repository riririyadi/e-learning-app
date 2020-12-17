import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Classroom from "./components/Classroom";
import ManageClassroom from "./components/ManageClassroom";
import CreateNewClassroom from "./components/CreateNewClassroom";
import CreateNewLesson from "./components/CreateNewLesson";
import StudentClassroom from "./components/StudentClassroom";
import DetailClassroom from "./components/DetailClassroom";
import Quiz from "./components/Quiz";
import StudentQuiz from "./components/StudentQuiz";
import NotMatch from "./components/NotMatch";
import QuizResult from "./components/QuizResult";
import Profile from "./components/Profile";
import Task from "./components/Task";
import StudentTask from "./components/StudentTask";
import Grade from "./components/Grade";
import DoQuiz from "./components/DoQuiz";
import SearchResult from "./components/SearchResult";

const DoQuizRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/detail/do-quiz" component={DoQuiz} />
      <Route path="/u/classroom/detail/do-quiz/result" component={QuizResult} />
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
      <Route path="/u/classroom/detail/do-task" component={DoQuiz} />
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
      <Route path="/u/calendar" component={Calendar} />
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

const ManageClassroomRoute = () =>{
  return (
    <Switch>
      <Route exact path="/u/classroom/manage" component={ManageClassroom} />
      <Route path="/u/classroom/manage/create-new-lesson" component={CreateNewLesson} />
    </Switch>
  );
}

const TeacherClassRoute = () => {
  return (
    <Switch>
      <Route exact path="/u/classroom/" component={Classroom} />
      <Route path="/u/classroom/create-new-one" component={CreateNewClassroom} />
      <Route path="/u/classroom/manage"><ManageClassroomRoute/></Route>
    </Switch>
  );
};

export const TeacherRoutes = () => {
  return (
    <Switch>
      <Route exact path="/u/" component={Dashboard} />
      <Route path="/u/calendar" component={Calendar} />
      <Route path="/u/classroom">
        <TeacherClassRoute />
      </Route>
      <Route path="/u/search" component={SearchResult} />
      <Route path="/u/quiz" component={Quiz} />
      <Route path="/u/task" component={Task} />
      <Route path="/u/grade" component={Grade} />
      <Route path="/u/profile" component={Profile} />
      <Route path="/u/*" component={NotMatch} />
    </Switch>
  );
};
