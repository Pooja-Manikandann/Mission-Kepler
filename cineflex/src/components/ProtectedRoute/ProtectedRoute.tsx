import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/**
 * @description function to prevent users to move to different routes without login
 * @returns conditionally render login page or the children component
 */
const ProtectedRoute = () => {
    const { useAuthContext } = useAuth();
    const { isUserLoggedIn } = useAuthContext();
    return isUserLoggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
