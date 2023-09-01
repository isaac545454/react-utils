import React from "react";
import { Modal } from "../../../../components/Modal";
import { useStorage } from "../../../../hook/useStorage";

interface HomeModalProps {
  ButtonCancel: React.ReactNode;
}

export default function HomeModal({ ButtonCancel }: HomeModalProps) {
  const { getItem, setItem, removeItem } = useStorage({});
  return (
    <>
      <Modal.Header />
      <div>aaaaaaaaaaaa</div>
      <Modal.ContainerButtons>
        <>
          {ButtonCancel}
          <Modal.ButtonToSend
            // onClick={() => console.log(setItem("ala", { aaa: "aaaaaaaaaaa" }))}
            onClick={() => console.log(removeItem("isaac"))}
          />
        </>
      </Modal.ContainerButtons>
    </>
  );
}
