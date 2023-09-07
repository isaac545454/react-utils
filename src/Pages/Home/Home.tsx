//hooks
import { useHome } from './hook';

//components
import { Modal, GridInput, Input } from '@components';

//react
import { Fragment } from 'react';

const options = [
  { value: 'chocolate', label: 'Chocolate' },

  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

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
        <Modal.Header />
        <GridInput onSubmit={handleSubmit(onSubmit)}>
          <Fragment>
            <Input.Container>
              <Input.Label label="CPF" />
              <Input.Mask mask="999.999.99" {...register('cpf')} />
              <Input.Error errrors={errors} name="cpf" />
            </Input.Container>
            <Input.Container>
              <Input.Label label="SENHA" />
              <Input.Text type="password" {...register('password')} />
              <Input.Error errrors={errors} name="password" />
            </Input.Container>

            <Input.Container>
              <Input.Label label="SENHA" />
              <Input.ControllerSelect
                options={options}
                name="select"
                control={control}
              />

              <Input.Error errrors={errors} name="select" />
            </Input.Container>
            {/* <Input.Cont ainer>
              <Input.Label label='SENHA' />
              <Input.ControllerSelect options={options} name='select' control={control}   />
              <Input.Error errrors={errors} name='select' />
            </Input.Cont> */}
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
