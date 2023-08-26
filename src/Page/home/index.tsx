import { Suspense, lazy } from "react";
import { useHome } from "./hook";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skeleton from "../../components/Skeleton";
const ListPosts = lazy(() => import("./components/ListPosts"));
const ModalHomeEdit = lazy(() => import("./components/Modal"));

function Home() {
  const { data, treatmentComponen, onChangeModal, showModal } = useHome();

  return (
    <>
      <Header />
      {treatmentComponen && treatmentComponen}
      <Suspense fallback={<Skeleton repetition={10} />}>
        <ListPosts data={data ?? []} onChangeModal={onChangeModal} />
        <ModalHomeEdit onChangeModal={onChangeModal} showModal={showModal} />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
