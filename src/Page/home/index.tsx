import { Suspense, lazy } from "react";
import { useHome } from "./hook";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const ListPosts = lazy(() => import("./components/ListPosts"));
const ModalHomeEdit = lazy(() => import("./components/Modal"));

function Home() {
  const { data, treatmentComponen, onChangeModal, showModal } = useHome();

  return (
    <>
      <Header />
      {treatmentComponen && treatmentComponen}
      <Suspense fallback={<div>Loading lazy</div>}>
        <ListPosts data={data ?? []} onChangeModal={onChangeModal} />
        <ModalHomeEdit onChangeModal={onChangeModal} showModal={showModal} />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
