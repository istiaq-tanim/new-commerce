import BillDetails from "./BillDetails";
import CartItems from "./CartItems";
import { useGetCartQuery } from "../../../Features/CartItem/CartApi";
const Cart = () => {
      
      const {data:cartItems}=useGetCartQuery()
      return (
            <div>
                  <main className="py-16">
                        <div className="container 2xl:px-8 px-2 mx-auto">
                              <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                              <div className="cartListContainer">
                              <div className="space-y-6">
                                    {cartItems?.map(item => <CartItems key={item._id} item={item}></CartItems>)}
                              </div>
                                    <BillDetails></BillDetails>
                              </div>
                        </div>
                  </main>
            </div>
      );
};

export default Cart;