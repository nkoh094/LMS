import React from 'react';
import $ from 'jquery';
import RequireAuth from './RequireAuth';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const VerifyIdentity = React.lazy(()=> import('./Demo/Authentication/verify/verfiyIdentity'));
const Dashboard = React.lazy(() => import("./Demo/dashboard/dashboard"));
const FacultyDashboard = React.lazy(() => import("./Demo/dashboard/dashboard"));

const routes = [
    { path: '/verify/identity', exact: true, user: true, faculty: true, component: RequireAuth(VerifyIdentity) },
    { path: '/dashboard', exact: true, user: true, faculty: false, component: RequireAuth(Dashboard) },
    { path: '/home', exact: true, user: false, faculty: true, component: RequireAuth(FacultyDashboard) },
];

export default routes;