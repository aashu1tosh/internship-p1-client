// Toast.tsx
import React, { useEffect, useState } from 'react';
import './Toast.css';

type ToastProps = {
    message: string;
    type: 'success' | 'error' | 'info';
};

const Toast: React.FC<ToastProps> = ({ message, type }) => {
    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 10000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {showToast && (
                <div className={`toast ${type}`}>
                    <p>{message}</p>
                </div>
            )}
        </>
    );
};

export default Toast;
