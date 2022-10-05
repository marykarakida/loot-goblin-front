import { BrowserRouter } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';

import { AuthProvider } from './shared/contexts';

import AppRoutes from './routes';

const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);

function App() {
    return (
        <AuthProvider>
            <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend} options={{ enableMouseEvents: true }}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </DndProvider>
        </AuthProvider>
    );
}

export default App;
