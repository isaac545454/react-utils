import { useHome } from "./hook";

function Home() {
  const { data, handleClick, treatmentComponen } = useHome();

  return (
    <div>
      <h1>Header</h1>
      {treatmentComponen && treatmentComponen}
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
          <button onClick={handleClick}>Acessar</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
