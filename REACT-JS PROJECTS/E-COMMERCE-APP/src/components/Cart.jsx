import { useDispatch, useSelector } from "react-redux";
import { removeItems, clearCart} from "../utils/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const totalCount = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    dispatch(removeItems(id));
    toast.error("Item Removed from Cart");
  };

  const handleBuyNow = () => {
    if (totalCount === 0) {
      toast.warn("Cart is empty. Add items before buying.");
      return;
    }
    dispatch(clearCart());
    toast.success("Purchase successful! Thank you for shopping ❤️");
  };
  return (
    <div className="w-full mt-16 flex flex-wrap justify-center items-center">
      <div className="grid gap-2 p-3">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 font-bold text-2xl">Your 🛒 cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id || item.title}
              className="flex items-center gap-4 p-4 bg-red-500 shadowlg text-white rounded-md"
            >
              <img
                src={item.thumbnail || item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg"
              />
              <div className="p-2 mt-5">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">₹{item.price}</p>
              </div>
              <button
                className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-900 cursor-pointer"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="bg-gradient-to-r mt-5 from-blue-600 to-blue-500 text-white rounded-xl shadow-md px-6 py-4 mb-6 text-center">
        <h2 className="text-xl font-bold p-2 text-white mt-2">Cart summary</h2>
        <p className="text-lg sm:text-xl font-semibold mb-1">
          🛒 Cart: <span className="font-bold">{totalCount}</span> item(s)
        </p>
        <p className="text-lg sm:text-xl font-semibold">
          💰 Total: <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
        </p>
        <button
          onClick={handleBuyNow}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
