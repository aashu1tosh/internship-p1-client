import EncryptDecrypt from '@functions/EncryptDecrypt';
import AdminTemplate from 'Components/AdminTemplate/AdminTemplate';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    if (EncryptDecrypt.decrypt(localStorage.getItem('accessToken') as string)) {

        return <AdminTemplate />;
    } else

        return <Navigate to="/signin" replace />;
};

export default ProtectedRoute;