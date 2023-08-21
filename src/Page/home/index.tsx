import { useHome } from "./hook";
import Modal from "./HomeComponent/Modal";
import { styles } from "./style";

function Home() {
  const { data, treatmentComponen, onChangeModal, showModal } = useHome();

  return (
    <div>
      {treatmentComponen && treatmentComponen}
      <div className={styles.container}>
        {data?.map((item) => (
          <div key={item.id} className={styles.content}>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <button className={styles.button} onClick={onChangeModal}>
              Editar
            </button>
          </div>
        ))}
        <Modal showModal={showModal} onChangeModal={onChangeModal} />
      </div>
    </div>
  );
}

export default Home;
