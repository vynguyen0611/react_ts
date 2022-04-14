import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={['Learn React', 'Learn TypesScript']}></Todos>
    </div>
  );
}

export default App;
