import Person from "./components/Person";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <div>
        <Person name="enix" age={20} />
        <Person name="xe54z" age={20} />
      </div>
      <div>
        <Products name="Maingear" price="2300" />
        <Products name="System 76" price="3000" />
      </div>
    </div>
  );
}

export default App;
