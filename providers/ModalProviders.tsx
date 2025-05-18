import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  content: React.ReactNode | null;
  openModal?: (content: React.ReactNode) => void;
  closeModal?: () => void;
};

const defaultModalContext: ModalContextType = {
  isOpen: false,
  content: null,
};

export const ModalContext = createContext<ModalContextType>(defaultModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalProps, setModalProps] = useState(defaultModalContext);

  const openModal = (content: React.ReactNode) => {
    setModalProps({ isOpen: true, content });
  };

  const closeModal = () => {
    setModalProps({ isOpen: false, content: null });
  };

  return (
    <ModalContext.Provider value={{ ...modalProps, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
