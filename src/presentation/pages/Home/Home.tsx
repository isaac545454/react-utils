//hooks
import { useHome } from "./hook";

// //react
import { Fragment } from "react";

//mock
import { options } from "./mock";

// //components
import { Modal } from "../../components/Modal";
import {Input} from "../../components/atoms/Input";
import { GridInput } from "../../components/GridInput";

//types
import { InputMaskMolecule, InputTextMolecule } from "../../molecules/Input";

export const Home = () => {
  const {
    showModal,
    errors,
    register,
    handleSubmit,
    onSubmit,
    getValues
  } = useHome();


  console.log(getValues())

  return (
    <Modal.Container showModal={showModal}>
      <Fragment>
        {/*  */}
        <Modal.Header />
        <GridInput onSubmit={handleSubmit(onSubmit)}>
          <Fragment>
            {/*  */}
            <InputMaskMolecule
              InputErrrorProps={{ errors: errors, name: "cpf" }}
              InputTitleProps={{ label: "CPF" }}
              {...register("cpf")}
              mask="999.999.999.99"
            />
   
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
