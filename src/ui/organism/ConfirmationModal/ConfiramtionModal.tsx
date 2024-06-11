import React from 'react';
import './ConfirmationModal.css';

interface ConfirmationModalProps {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className='backdrop' onClick={onCancel}></div>
            <div className="modal center-dialog">
                <div className="modal-content">
                    <p>Are you sure about your actions?</p>
                    <div>
                        <button onClick={onCancel} className='error'>Cancel</button>
                        <button onClick={onConfirm} className='success'>Confirm</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ConfirmationModal;
