import "./App.css";
import Albums from "./screens/Albums/Albums.jsx";
import AlbumDetail from "./screens/AlbumDetail/AlbumDetail.jsx"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/albums">
          <Albums />
        </Route>
        <Route exact path="/albums/:id">
          <AlbumDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
