import React, { FC, MouseEvent } from 'react';
import * as C from './Modal.style';

interface ModalProps {
    content?: JSX.Element | string;
    active: boolean;
    onClose?: () => void;
}

const Modal: FC<ModalProps> = props => {
    const {
        active,
        content,
        onClose,
    } = props;

    const handleClose = () => (onClose ? onClose() : null);
    const stopPropagation = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

    return (
        <C.ModalBackground isModalActive={active} onClick={handleClose}>
            <C.ModalWindow
                isModalActive={active}
                onClick={stopPropagation}>
                {content}
            </C.ModalWindow>
        </C.ModalBackground>
    );
};

export default Modal;
