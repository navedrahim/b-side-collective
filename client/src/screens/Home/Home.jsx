import Layout from "../../components/Layout/Layout.jsx"
import { Link } from "react-router-dom"

function Home(props) {
return (
  <Layout user={props.user}>
    <header className="home-header">
      <h2>Buy and Sell Vinyl On-Line</h2>
      <Link to="/albums">
        <button className="home-cta">Shop Now</button>
      </Link>
      <img src="https://reviewed-production.s3.amazonaws.com/1585679070654/TurntableHero.jpg" alt="turntable hero image"/>
    </header>
    <div className="home-secondary-section">
      <div className="home-secondary-card">
        <p>Browse a wide selection of new and vintage vinyl.</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/8136gM-aYFL._SL1425_.jpg"/>
      </div>
      <div className="home-secondary-card">
        <p>Members can offer vinyl from their collection for sale.</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg"/>
      </div>
    </div>
  </Layout>
)
}

export default Home