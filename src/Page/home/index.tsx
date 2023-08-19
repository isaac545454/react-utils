import { useHome } from "./hook";

function Home() {
  const { data, treatmentComponen } = useHome();

  return (
    <div>
      {treatmentComponen && treatmentComponen}
      <div className="mt-10 mx-10 w-full grid lg:grid-cols-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="mb-8 w-[300px] shadow-md px-8 py-4 h-[350px] rounded-2xl relative flex justify-center"
          >
            <p>{item.title}</p>
            <p>{item.body}</p>
            <button className="bg-blue300 text-myOrange px-20 py-2 rounded-md absolute bottom-3">
              Editar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
