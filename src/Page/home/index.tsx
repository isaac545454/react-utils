import { Suspense, lazy } from "react";
import { useHome } from "./hook";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skeleton from "../../components/Skeleton";
const ListPosts = lazy(() => import("./components/ListPosts"));
const ModalHomeEdit = lazy(() => import("./components/Modal"));
const ButtonCancel = lazy(() =>
  import("../../components/Modal/components/buttonCancel").then((module) => ({
    default: module.ButtonCancel,
  }))
);
const ModalContainer = lazy(() =>
  import("../../components/Modal/components/Container").then((module) => ({
    default: module.Container,
  }))
);

function Home() {
  const { data, treatmentComponen, onChangeModal, showModal } = useHome();

  return (
    <>
      <Header />
      {treatmentComponen && treatmentComponen}
      <Suspense fallback={<Skeleton repetition={10} />}>
        <ListPosts data={data ?? []} onChangeModal={onChangeModal} />

        <ModalContainer showModal={showModal}>
          <ModalHomeEdit
            ButtonCancel={<ButtonCancel onChangeModal={onChangeModal} />}
          />
        </ModalContainer>
        
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
