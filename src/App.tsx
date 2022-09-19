import "./App.css";
import Card from "./components/Card/Index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <div className="wrapper">
        <div className="container px-4 py-5">
          <Card />
        </div>
      </div>
    </main>
  );
}

export default App;
