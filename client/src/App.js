import "./App.css";
import Albums from "./screens/Albums/Albums.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/albums">
          <Albums />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
