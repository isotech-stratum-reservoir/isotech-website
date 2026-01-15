import { ReactNode } from "react";
import { useId } from "react";

interface ModalProps {
    buttonTxt: string;
    modalTitle: string;
    children: ReactNode;
}

export default function Modal({ 
    buttonTxt, 
    modalTitle, 
    children 
}: ModalProps) {
    const modalId = useId() + 'Modal';
    
    return (
        <>
            <button type="button" className="btn green-bg" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                {buttonTxt}
            </button>

            <div className="modal fade" id={modalId} tabIndex={-1} aria-labelledby={`${modalId}Label`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id={`${modalId}Label`}>{modalTitle}</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn dark-grey-bg" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}