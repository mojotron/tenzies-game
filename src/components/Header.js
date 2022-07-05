import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__heading">Tenzies</h1>
      <p className="Header__description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </header>
  );
};

export default Header;
