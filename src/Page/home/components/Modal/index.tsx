import React from "react";
import { Modal } from "../../../../components/Modal";
import { useStorage } from "../../../../hook/useStorage";

interface HomeModalProps {
  ButtonCancel: React.ReactNode;
}

export default function HomeModal({ ButtonCancel }: HomeModalProps) {
  const { setItem } = useStorage({});
  return (
    <>
      <Modal.Header />
      <div>aaaaaaaaaaaa</div>
      <Modal.ContainerButtons>
        <>
          {ButtonCancel}
          <Modal.ButtonToSend onClick={() => setItem("isaac", "test")} />
        </>
      </Modal.ContainerButtons>
    </>
  );
}
