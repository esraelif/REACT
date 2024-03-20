import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const name = "esra";
    const password = "1234";
    return name === "esra" && password === "1234" ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter;
