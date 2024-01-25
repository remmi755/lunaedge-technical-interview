import * as React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width: string;
  title: string;
}

const Modal = ({ isOpen, onClose, children, width, title }: ModalProps) => {
  const onWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as Element).classList.contains("modal-wrapper")) {
      onClose();
    }
  };
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-wrapper" onClick={onWrapperClick}>
            <div className={`modal-content ${width}`}>
              <h1 className="text-start mb-2 font-bold text-xl">{title}</h1>
              <button className="modal-close-button" onClick={() => onClose()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
