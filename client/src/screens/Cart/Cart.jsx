import "./Cart.css"
import { useState, useEffect} from "react"
import { getAlbums } from "../../services/albums.js";
import Layout from "../../components/Layout/Layout.jsx"

function Cart(props) {
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums();
      if (localStorage.getItem("cart")) {
      const cartIds = localStorage.getItem("cart").split(",")
      const cartAlbums = albums.filter(album => cartIds.includes(album._id))
      setCartItems(cartAlbums);
      }
    };
    fetchAlbums();
  }, []); 
  return (
    <Layout user={props.user}>
      <section className="cart-container">
        { cartItems.length !== 0 ? 
        cartItems.map(item => 
        <div>
          <img src={item.imageURL}/>
          <h2>{item.album}</h2>
          <h3>{item.artist}</h3>
          <h3>{item.price}</h3>
        </div>) 
        : 
          <h2>cart is empty</h2>
        }
        { cartItems.length !== 0 &&
        <div>{cartItems.reduce((total, item) => total + item.price, 0)}
        </div>
        }
      </section>
    </Layout>
  )
}

export default Cart