const dashboard = () => {
  return (
    <>
      <div className="h-screen flex">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <h1>dasboard</h1>
    </>
  );
};

function Sidebar() {
  return (
    <div className="h-full w-48 bg-black flex-shrink-0">
      <h1 className="text-gray-400 text-center text-3xl">Cronos</h1>
      <ul className="mt-4">
        <li className="text-gray-400 px-4 py-2 cursor-pointer">Usuarios</li>
        <li className="text-gray-400 px-4 py-2 cursor-pointer">Habitaciones</li>
        <li className="text-gray-400 px-4 py-2 cursor-pointer">Clientes</li>
        <li className="text-gray-400 px-4 py-2 cursor-pointer">Informes</li>
      </ul>
    </div>
  );
}

function Main() {
  return <div className="">main</div>;
}

export default dashboard;
