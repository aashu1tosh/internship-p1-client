import EncryptDecrypt from '@functions/EncryptDecrypt';
import AdminTemplate from 'Components/AdminTemplate/AdminTemplate';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = EncryptDecrypt.decrypt(localStorage.getItem('accessToken') as string) ||
        EncryptDecrypt.decrypt(sessionStorage.getItem('accessToken') as string);
    if (token) {
        return <AdminTemplate />;
    } else

        return <Navigate to="/signin" replace />;
};

export default ProtectedRoute;