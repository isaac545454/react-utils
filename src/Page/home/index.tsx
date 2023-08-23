import { useHome } from "./hook";
import Modal from "./HomeComponent/Modal";
import ListPosts from "./HomeComponent/ListPosts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  const { data, treatmentComponen, onChangeModal, showModal } = useHome();

  return (
    <>
      <Header />
      {treatmentComponen && treatmentComponen}
      <ListPosts data={data} />
      <Modal showModal={showModal} onChangeModal={onChangeModal} />
      <Footer />
    </>
  );
}

export default Home;
