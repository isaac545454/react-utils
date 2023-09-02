import React from "react";
import { Modal } from "../../../../components/Modal";

interface HomeModalProps {
  ButtonCancel: React.ReactNode;
}

export default function HomeModal({ ButtonCancel }: HomeModalProps) {
  return (
    <>
      <Modal.Header />
      <div>aaaaaaaaaaaa</div>
      <Modal.ContainerButtons>
        <>
          {ButtonCancel}
          <Modal.ButtonToSend />
        </>
      </Modal.ContainerButtons>
    </>
  );
}
