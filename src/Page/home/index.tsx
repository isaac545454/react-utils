import { useHome } from "./hook";

function Home() {
  const { data, treatmentComponen } = useHome();

  return (
    <div>
      <h1>Header</h1>
      {treatmentComponen && treatmentComponen}
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
          <button>Acessar</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
