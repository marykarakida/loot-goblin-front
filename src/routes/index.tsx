import { Routes, Route, Navigate } from 'react-router-dom';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<h1>This is Home Page</h1>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default AppRoutes;
