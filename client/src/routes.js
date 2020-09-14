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
];

export default routes;