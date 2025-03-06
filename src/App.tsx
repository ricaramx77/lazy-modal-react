import React, { lazy, Suspense, useState } from 'react';

// Importa el componente Modal utilizando React.lazy
const Modal = lazy(() => import('./Modal'));

const App: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && (
        <Suspense fallback={<div>Loading Modal...</div>}>
          <Modal onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
