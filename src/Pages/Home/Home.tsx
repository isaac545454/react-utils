//hooks
import { useHome } from "./hook";

// //react
import { Fragment } from "react";

//mock
import { options } from "./mock";

// //components
import { Modal } from "../../components/Modal";
import {Input} from "../../components/Input";
import { GridInput } from "../../components/GridInput";

//types
import { ISchema } from "./types";

export const Home = () => {
  const {
    showModal,
    errors,
    register,
    handleSubmit,
    onSubmit,
    control,
    ID,

  } = useHome();

  return (
    <Modal.Container showModal={showModal}>
      <Fragment>
        {/*  */}
        <Modal.Header />
        <GridInput onSubmit={handleSubmit(onSubmit)}>
          <Fragment>
            {/*  */}
            <Input.Container htmlFor={`${ID}-CPF`}>
              <Input.Label label="CPF" />
              <Input.Mask
                mask="999.999.999-99"
                {...register("cpf")}
                id={`${ID}-CPF`}
              />
              <Input.Error<ISchema> errors={errors} name="password" />
            </Input.Container>
            {/*  */}
            <Input.Container htmlFor={`${ID}-SENHA`}>
              <Input.Label label="SENHA" />
              <Input.Text
                type="password"
                {...register("password")}
                id={`${ID}-SENHA`}
              />
              <Input.Error<ISchema> errors={errors} name="cpf" />
            </Input.Container>
            {/*  */}
            <Input.Container htmlFor={`${ID}-estado`}>
              <Input.Label label="estado" />
              <Input.ControllerSelect
                control={control}
                name="select2"
                options={options}
                id={`${ID}-estado`}
              />
              <Input.Error<ISchema> errors={errors} name="select2" />
            </Input.Container>
            {/*  */}
            <Input.Container htmlFor={`${ID}-cidade`}>
              <Input.Label label="cidade" />
              <Input.ControllerSelectAsync
                control={control}
                name="select1"
                id={`${ID}-cidade`}
              />
              <Input.Error<ISchema> errors={errors} name="cpf" />
            </Input.Container>
            {/*  */}
            <Input.Container htmlFor={`${ID}-data`}>
              <Input.Label label="data" />
              <Input.Date {...register("select1.label")} id={`${ID}-data`} />
              <Input.Error<ISchema> errors={errors} name="cpf" />
            </Input.Container>
            {/*  */}
          </Fragment>
          <Modal.ContainerButtons>
            <Fragment>
              <Modal.ButtonCancel type="button" onClick={onSubmit} />
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
