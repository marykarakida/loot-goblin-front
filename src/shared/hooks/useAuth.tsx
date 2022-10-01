import { useContext } from 'react';
import AuthContext from '../contexts/AuthProvider';

export function useAuth() {
    return useContext(AuthContext);
}
