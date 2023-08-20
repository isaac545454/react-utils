import { Modal } from "../../../components/Modal";

export default function HomeModal({
  showModal,
  onChangeModal,
}: {
  showModal: boolean;
  onChangeModal: () => void;
}) {
  return (
    <Modal.Container showModal={showModal}>
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
    </Modal.Container>
  );
}
