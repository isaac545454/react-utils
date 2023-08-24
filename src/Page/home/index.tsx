import { useHome } from "./hook";
import ModalHomeEdit from "./HomeComponent/Modal";
import ListPosts from "./HomeComponent/ListPosts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Modal } from "../../components/Modal";

function Home() {
  const { data, treatmentComponen, onChangeModal, showModal } = useHome();

  return (
    <>
      <Header />
      {treatmentComponen && treatmentComponen}
      <ListPosts data={data ?? []} />
      <Modal.Container showModal={showModal}>
        <ModalHomeEdit onChangeModal={onChangeModal} />
      </Modal.Container>
      <Footer />
    </>
  );
}

export default Home;
