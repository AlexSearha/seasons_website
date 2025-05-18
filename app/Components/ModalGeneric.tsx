'use client';
import { useModal } from '@/providers/ModalProviders';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
Modal.setAppElement('#body');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '50%',
    width: '50%',
    backgroundColor: '#d4bd97',
    border: '2px solid #17171777',
  },
};

export default function ModalGeneric() {
  const modalProps = useModal();
  return (
    <div id="modal" className="relative">
      <Modal
        isOpen={modalProps.isOpen}
        onRequestClose={modalProps.closeModal}
        contentLabel="Example Modal"
        style={customStyles}
        overlayClassName="modal-overlay"
      >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={modalProps.closeModal}
          size="xl"
          className="cursor-pointer absolute top-0 right-0 m-4"
        />
        {modalProps.content}
      </Modal>
    </div>
  );
}
