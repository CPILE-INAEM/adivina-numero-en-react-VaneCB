import "./App.css";
import Aviso from "./Aviso.js";
import Header from "./Header.js";
import Contador from "./Contador.js";
import Disminuir from "./Disminuir.js";
function App() {
  return (
    <div className="App">
      <Header titulo="Esta es la página principal" />
      <p>Parrafo de prueba</p>
      <Contador />
      <Disminuir />
      <Aviso />
    </div>
  );
}

export default App;
