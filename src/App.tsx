import ControlledAccordions from "./components/accordion";
import AddTodo from "./components/addTodo";

function App() {
  return (
    <div className="App" style={{fontFamily:'Open Sans'}}>
      <AddTodo />
      <ControlledAccordions />
    </div>
  );
}

export default App;
