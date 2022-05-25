import "./App.css";
import FormInput from "./components/formInput";
import List from "./components/list";
import Footer from "./components/footer";
import { DataProvider } from "./components/dataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
