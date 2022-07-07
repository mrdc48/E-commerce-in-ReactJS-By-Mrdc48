import Logic from "./Logic";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "mens",
    },
    {
      id: 2,
      title: "sneakers",
    },
    {
      id: 3,
      title: "t-shirt",
    },
    {
      id: 4,
      title: "pants",
    },
  ];
  return (
    <div>
      <Logic categories={categories} />
    </div>
  );
};

export default App;
