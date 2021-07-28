import "./Cart.css"
import { useState, useEffect} from "react"
import { getAlbums } from "../../services/albums.js";
import Layout from "../../components/Layout/Layout.jsx"

function Cart(props) {
  const [cartItems, setCartItems] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
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
  }, [isDeleted]); 

  const handleDelete = (id) => {
    const currentItems = localStorage.getItem("cart").split(",")
    const index = currentItems.findIndex(item => item === id)
    currentItems.splice(index, 1)
    setCartItems(currentItems)
    localStorage.setItem("cart", currentItems)
    setIsDeleted(!isDeleted)
  }
  return (
    <Layout user={props.user}>
      <div className="cart-header">Shopping Cart</div>
      <section className="cart-container">
        { cartItems.length !== 0 ? 
        cartItems.map(item => 
        <div className="item-detail" key={item._id}>
          <img className="cart-image" src={item.imageURL} alt={item.album}/>
          <div className="item-text">
          <h2>{item.album}</h2>
          <h3>{item.artist}</h3>
          </div>
          <h3>${item.price}</h3>
          <div className="remove-button">
            <button className="actual-button" onClick={() =>handleDelete(item._id)}>REMOVE</button>
          </div>
        </div>) 
        : 
          <h2 className="empty">cart is empty</h2>
        }

      </section>
      <div className="total">
        <div className="total-text">Total $</div>
        { cartItems.length !== 0 &&
        <div>{cartItems.reduce((total, item) => total + item.price, 0)}
        </div>
        }
      <button className="checkout">CHECKOUT</button>
      </div>
    </Layout>
  )
}

export default Cart