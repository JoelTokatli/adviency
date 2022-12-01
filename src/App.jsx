import gifts from "./Components/gifts";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <ul className="list">
        <h1>¡Regalos Navideños!</h1>
        {gifts.map((element) => {
          const { name } = element;
          return (
            <li className="list-item">
              <h2>{name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
