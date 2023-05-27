import ControlledAccordions from "./components/accordion";
import AddTodo from "./components/addTodo";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AddTodo />
        <ControlledAccordions />
      </div>
    </ThemeProvider>
  );
}

export default App;
