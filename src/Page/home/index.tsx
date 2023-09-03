import { useHome } from "./hook";
import { Modal } from "../../components/Modal";
import { GridInput } from "../../components/GridInput";
import { Input } from "../../components/Input";
import { ErrrorInput } from "../../components/ErrorInput";
import { Fragment } from "react";

export const Home = () => {
  const { onChangeModal, showModal, errors, register, handleSubmit, onSubmit } =
    useHome();
  return (
    <Modal.Container showModal={showModal}>
      <Fragment>
        <Modal.Header />
        <GridInput onSubmit={handleSubmit(onSubmit)}>
          <Fragment>
            <Input
              {...register("title")}
              label="Titulo"
              message={<ErrrorInput errrors={errors} name="title" />}
            />
            <Input
              {...register("body")}
              label="Descrição"
              message={<ErrrorInput errrors={errors} name="body" />}
            />
          </Fragment>
          <Modal.ContainerButtons>
            <Fragment>
              <Modal.ButtonCancel type="button" onClick={onChangeModal} />
              <Modal.ButtonToSend type="submit" />
            </Fragment>
          </Modal.ContainerButtons>
        </GridInput>
      </Fragment>
    </Modal.Container>
  );
};
