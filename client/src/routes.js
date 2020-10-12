import React from 'react';
import $ from 'jquery';
import RequireAuth from './RequireAuth';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const VerifyIdentity = React.lazy(()=> import('./Demo/Authentication/verify/verfiyIdentity'));
const Dashboard = React.lazy(() => import("./Demo/dashboard/dashboard"));
const FacultyDashboard = React.lazy(() => import("./Demo/dashboard/dashboard"));

//Admin
const AdminDashboard = React.lazy(() => import("./Demo/dashboard/dashboard"));
const Interest = React.lazy(() => import("./Demo/Admin/interests/interests"));
const Students = React.lazy(() => import("./Demo/Admin/students/students"));
const Teachers = React.lazy(() => import("./Demo/Admin/teachers/teachers"));

//Faculty
const Classes = React.lazy(() => import("./Demo/Faculty/Classes/Classes"));
const CreateClass = React.lazy(() => import("./Demo/Faculty/Classes/CreateClass"));
const AddVideoLecture = React.lazy(() => import("./Demo/Faculty/CourseContent/AddVideoLecture"));
const ListVideoLecture = React.lazy(() => import("./Demo/Faculty/CourseContent/ListVideoLectures"));
const AddTopic = React.lazy(() => import("./Demo/Faculty/CourseContent/AddTopic"));
const AddGeneralTopic = React.lazy(() => import("./Demo/Faculty/GeneralTopics/AddTopic"));
const AddAnnoucements = React.lazy(() => import("./Demo/Faculty/Annoucements/AddAnnoucements"));
const ListAnnoucements = React.lazy(() => import("./Demo/Faculty/Annoucements/ListAnnoucement"));
const AddAssignment = React.lazy(() => import("./Demo/Faculty/Assignments/AddAssignments"));
const ListAssignment = React.lazy(() => import("./Demo/Faculty/Assignments/ListAssignments"));
const ListAssignmentSubmission = React.lazy(() => import("./Demo/Faculty/Assignments/SubmissionList"));
const AddCourseMaterial = React.lazy(() => import("./Demo/Faculty/CourseMaterial/AddCourseMaterial"));
const ListCourseMaterial = React.lazy(() => import("./Demo/Faculty/CourseMaterial/ListCourseMaterial"));
const ListGeneralTopics = React.lazy(() => import("./Demo/Faculty/GeneralTopics/ListTopics"));
const ListTopic = React.lazy(() => import("./Demo/Faculty/CourseContent/ListTopic"));

//Users
const UeserInterests = React.lazy(() => import("./Demo/Users/Interests/Interests"));


const routes = [
    { path: '/verify/identity', exact: true, user: true, faculty: true, component: RequireAuth(VerifyIdentity) },
    { path: '/dashboard', exact: true, user: true, faculty: false, component: RequireAuth(Dashboard) },
    { path: '/interests', exact: true, user: true, component: RequireAuth(UeserInterests) },
    { path: '/home', exact: true, user: false, faculty: true, component: RequireAuth(FacultyDashboard) },
    { path: '/admin/dashboard', exact: true, admin: true, component: RequireAuth(AdminDashboard) },
    { path: '/admin/interest', exact: true, admin: true, component: RequireAuth(Interest) },
    { path: '/admin/student/list', exact: true, admin: true, component: RequireAuth(Students) },
    { path: '/admin/teacher/list', exact: true, admin: true, component: RequireAuth(Teachers) },
    { path: '/faculty/class/list', exact: true, faculty: true, component: RequireAuth(Classes) },
    { path: '/faculty/class/create', exact: true, faculty: true, component: RequireAuth(CreateClass) },
    { path: '/faculty/class/:id/course/create', exact: true, faculty: true, component: RequireAuth(AddVideoLecture) },
    { path: '/faculty/class/:id/course/list', exact: true, faculty: true, component: RequireAuth(ListVideoLecture) },
    { path: '/faculty/class/:id/topic/create', exact: true, faculty: true, component: RequireAuth(AddTopic) },
    { path: '/faculty/topic/general/create', exact: true, faculty: true, component: RequireAuth(AddGeneralTopic) },
    { path: '/faculty/class/:id/annoucement/create', exact: true, faculty: true, component: RequireAuth(AddAnnoucements) },
    { path: '/faculty/class/:id/annoucement/list', exact: true, faculty: true, component: RequireAuth(ListAnnoucements) },
    { path: '/faculty/class/:id/assignment/create', exact: true, faculty: true, component: RequireAuth(AddAssignment) },
    { path: '/faculty/class/:id/assignment/list', exact: true, faculty: true, component: RequireAuth(ListAssignment) },
    { path: '/faculty/class/:id/assignment/:assign_id/submissions', exact: true, faculty: true, component: RequireAuth(ListAssignmentSubmission) },
    { path: '/faculty/class/:id/course/material/create', exact: true, faculty: true, component: RequireAuth(AddCourseMaterial) },
    { path: '/faculty/class/:id/course/material/list', exact: true, faculty: true, component: RequireAuth(ListCourseMaterial) },
    { path: '/faculty/topic/general/list', exact: true, faculty: true, component: RequireAuth(ListGeneralTopics) },
    { path: '/faculty/class/:id/topic/list', exact: true, faculty: true, component: RequireAuth(ListTopic) },
    
];

export default routes;