//hooks
import { useHome } from "./hook";

// //react
import { Fragment, useState } from "react";

//mock
import { options } from "./mock";

// //components
import { Modal } from "../../components/Modal";
import {Input} from "../../components/atoms/Input";
import { GridInput } from "../../components/GridInput";

//types
import { InputMaskMolecule, InputTextMolecule } from "../../molecules/Input";
import {Dropzone} from "../../components/atoms/Input/Dropzone/Dropzone";

export const Home = () => {
  const {
    showModal,
    errors,
    register,
    handleSubmit,
    onSubmit,
    getValues
  } = useHome();

  const [uploadedFile, setUploadedFile] = useState<File[] | null>(null);

  const handleFileUpload = (file: File[]) => {
    console.log(file)
    // Lide com o arquivo carregado aqui, por exemplo, enviando-o para um servidor.
    setUploadedFile(file);
  };
  console.log(getValues())

  return (
    <Modal.Container showModal={showModal}>
      <Fragment>
        {/*  */}
        <Modal.Header />
        <GridInput onSubmit={handleSubmit(onSubmit)}>
          <Fragment>
          
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
           <Dropzone onFileUpload={handleFileUpload} />
         {uploadedFile?.map(item =><p className="mt-4">Arquivo carregado: {item.name}</p>)}
          {/*  */}
        </GridInput>
      </Fragment>
      {/*  */}
    </Modal.Container>
  );
};
