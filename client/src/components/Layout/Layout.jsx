import "./Layout.css";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = (props) => (
  <div className="layout">
    <Nav user={props.user}/>
    <div className="layout-children">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
