import "./App.css";
import Albums from "./screens/Albums/Albums.jsx";
import AlbumDetail from "./screens/AlbumDetail/AlbumDetail.jsx"
import AlbumCreate from "./screens/AlbumCreate/AlbumCreate.jsx";
import AlbumEdit from "./screens/AlbumEdit/AlbumEdit.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx"
import SignOut from "./screens/SignOut/SignOut.jsx"
import SignIn from "./screens/SignIn/SignIn.jsx";
import Home from "./screens/Home/Home.jsx";
import Cart from "./screens/Cart/Cart.jsx"
import { verifyUser } from "./services/users.js"
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/cart">
          <Cart user={user} />
          {/* { user ? <Cart user={user} /> : <Redirect to="/sign-up" />} */}
        </Route>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} user={user} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} user={user} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser}/>
        </Route>
        <Route exact path="/albums">
          <Albums user={user}/>
        </Route>
        <Route exact path="/albums/:id">
          <AlbumDetail user={user}/>
        </Route>
        <Route exact path="/add">
          { user ? <AlbumCreate user={user}/> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/albums/:id/edit">
        { user ? <AlbumEdit user={user}/> : <Redirect to="/sign-up" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
