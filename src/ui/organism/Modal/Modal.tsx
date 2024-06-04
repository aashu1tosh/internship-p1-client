import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import './Modal.css';
interface DialogProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <>
            <div className="backdrop" onClick={onClose}></div>
            <dialog open className="center-dialog">
                <FaWindowClose onClick={onClose} size={25} style={{ float: "right" }} /><br />
                {children}
            </dialog>
        </>
    );
};

export default Dialog;
