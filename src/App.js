import Die from "./components/Die";

const App = () => {
  return (
    <div className="App">
      <Die value={3} filled={false} />
    </div>
  );
};

export default App;
