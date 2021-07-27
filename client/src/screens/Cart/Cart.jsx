import "./Cart.css"
import { useState, useEffect} from "react"
import { getAlbums } from "../../services/albums.js";
function Cart(props) {
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums();
      const cartIds = localStorage.getItem("cart").split(",")
      const cartAlbums = albums.filter(album => cartIds.includes(album._id))
      setCartItems(cartAlbums);
      
    };
    fetchAlbums();
  }, []); 
  
  return (
    <div>
      {cartItems.map(item => 
        <h2>{item.album}</h2>
        )}
    </div>
  )
}

export default Cart