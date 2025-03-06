import React, { CSSProperties } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Asegura que el modal esté al frente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default Modal;