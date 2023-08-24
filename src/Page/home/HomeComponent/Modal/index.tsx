import { Modal } from "../../../../components/Modal";

export default function HomeModal({
  onChangeModal,
}: {
  onChangeModal: () => void;
}) {
  return (
    <>
      <Modal.Header />
      <div>aaaaaaaaaaaa</div>
      <Modal.ContainerButtons>
        <>
          <Modal.ButtonCancel onChangeModal={onChangeModal} />
          <Modal.ButtonToSend />
        </>
      </Modal.ContainerButtons>
    </>
  );
}
