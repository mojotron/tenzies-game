import DiceGrid from "./components/DiceGrid";

const App = () => {
  return (
    <div className="App">
      <DiceGrid
        dice={[
          { id: 0, value: 4, filled: false },
          { id: 1, value: 1, filled: true },
          { id: 2, value: 2, filled: false },
          { id: 3, value: 3, filled: false },
          { id: 4, value: 4, filled: true },
          { id: 5, value: 5, filled: false },
          { id: 6, value: 6, filled: true },
          { id: 7, value: 1, filled: true },
          { id: 8, value: 2, filled: true },
          { id: 9, value: 3, filled: true },
        ]}
      />
    </div>
  );
};

export default App;
