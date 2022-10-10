import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout, Header } from '../shared/layouts';
import { PublicRoute, PrivateRoute } from '../shared/components';

import LandingPage from '../pages/Landing';
import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import HomePage from '../pages/Home';
import InventoryPage from '../pages/Inventory';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<Header />}>
                    {/* PUBLIC ROUTES */}
                    <Route
                        path="/"
                        element={
                            <PublicRoute restricted>
                                <LandingPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/sign-up"
                        element={
                            <PublicRoute restricted>
                                <SignUpPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/sign-in"
                        element={
                            <PublicRoute restricted>
                                <SignInPage />
                            </PublicRoute>
                        }
                    />

                    {/* PRIVATE ROUTES */}
                    <Route
                        path="/user"
                        element={
                            <PrivateRoute>
                                <HomePage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/inventories/:id"
                        element={
                            <PrivateRoute>
                                <InventoryPage />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
