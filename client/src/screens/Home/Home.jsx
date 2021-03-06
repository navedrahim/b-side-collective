import "./Home.css";
import Layout from "../../components/Layout/Layout.jsx";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Layout user={props.user}>
      <header className="home-header">
        <div className="home-header-text">
          <h2>Buy and sell vinyl on-line.</h2>
          <Link to="/albums">
            <button className="home-cta">SHOP NOW</button>
          </Link>
        </div>
      <div className="hero-image-container">
        <img src="https://reviewed-production.s3.amazonaws.com/1585679070654/TurntableHero.jpg" alt="turntable hero"/>
      </div>
    </header>
    <div className="home-secondary-section">
      <div className="home-secondary-card">
        <p>Browse a wide selection of new and vintage vinyl. Find the perfect addition to your collection. </p>
        <div className="secondary-image-container">
          <img src="https://images-na.ssl-images-amazon.com/images/I/8136gM-aYFL._SL1425_.jpg" alt="turntable"/>
        </div>
      </div>
      <div className="home-secondary-card">
        <div className="secondary-image-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg" alt="turntable"/>
        </div>
        <p>Members can offer vinyl from their collection for sale.</p>
      </div>
    </div>
    </Layout>
  );
}

export default Home;
