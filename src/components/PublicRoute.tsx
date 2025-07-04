import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PublicRouteProps {
    children: React.ReactNode;
    restricted?: boolean;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
    children,
    restricted = false
}) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (isAuthenticated && restricted) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
};
