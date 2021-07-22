import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = (props) => {
  <div className="layout">
    {/* add user={props.user} to Nav */}
    <Nav />
    <div className="layout-children">
      {props.children}
    </div>
    <Footer />
  </div>;
};

export default Layout;
