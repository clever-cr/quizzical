const Menu = ({ start }) => {
  return (
    <div className="flex flex-col items-center gap-6 p-28">
      <h1 className="text-2xl">Quizzical</h1>
      <span className="text-lg">Description</span>
      <button
        className="px-10 py-5 rounded-lg text-white text-lg bg-blue-900"
        onClick={() => start()}
      >
        Start
      </button>
    </div>
  );
};

export default Menu;
