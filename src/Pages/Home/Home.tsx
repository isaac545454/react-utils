//hooks
import { useHome } from "./hook";

// //react
import { Fragment } from "react";

//mock
import { options } from "./mock";

// //components
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { GridInput } from "../../components/GridInput";

export const Home = () => {
  const {
    onChangeModal,
    showModal,
    errors,
    register,
    handleSubmit,
    onSubmit,
    control,
  } = useHome();

  return (
    <Modal.Container showModal={showModal}>
      <Fragment>
        {/*  */}
        <Modal.Header />
        <GridInput onSubmit={handleSubmit(onSubmit)}>
          <Fragment>
            {/*  */}
            <Input.Container>
              <Input.label label="CPF" />
              <Input.Mask mask="999.999.99" {...register("cpf")} />
              <Input.Error errors={errors} name="cpf" />
            </Input.Container>
            {/*  */}
            <Input.Container>
              <Input.label label="SENHA" />
              <Input.Text type="password" {...register("password")} />
              <Input.Error errors={errors} name="password" />
            </Input.Container>
            {/*  */}
            <Input.Container>
              <Input.label label="SENHA" />
              <Input.ControllerSelect
                control={control}
                name="select2"
                options={options}
              />
              <Input.Error errors={errors} name="select2" />
            </Input.Container>
            {/*  */}
            <Input.Container>
              <Input.label label="SENHA" />
              <Input.ControllerSelectAsync control={control} name="select1" />
              <Input.Error errors={errors} name="select1" />
            </Input.Container>
            {/*  */}
            <Input.Container>
              <Input.label label="SENHA" />
              <Input.DateInput {...register("select1.label")} name="select1" />
              <Input.Error errors={errors} name="select1" />
            </Input.Container>
            {/*  */}
          </Fragment>
          <Modal.ContainerButtons>
            <Fragment>
              <Modal.ButtonCancel type="button" onClick={onChangeModal} />
              <Modal.ButtonToSend type="submit" />
            </Fragment>
          </Modal.ContainerButtons>
          {/*  */}
        </GridInput>
      </Fragment>
      {/*  */}
    </Modal.Container>
  );
};
