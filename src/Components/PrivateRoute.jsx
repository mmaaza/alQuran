import React from 'react'
import { Navigate, Outlet } from 'react-router';
import {AuthState} from '../hooks/AuthState'
import Spinner from "./Spinner"
export default function PrivateRoute() {
const {loggedIn, checking} = AuthState();
if(checking) {
    return <Spinner/>
}
return loggedIn ? <Outlet /> : <Navigate to="/login"/>
}