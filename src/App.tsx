import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AuthProvider } from './shared/contexts';

import AppRoutes from './routes';

function App() {
    return (
        <AuthProvider>
            <DndProvider backend={HTML5Backend}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </DndProvider>
        </AuthProvider>
    );
}

export default App;
