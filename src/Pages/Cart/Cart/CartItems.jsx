import { FaTrashAlt } from "react-icons/fa";
import { useDecrementCartMutation, useIncrementCartMutation, useRemoveCartMutation } from "../../../Features/CartItem/CartApi";
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
const CartItems = ({ item }) => {
      const [incrementCart, { isSuccess: cartIncrementSuccess }] = useIncrementCartMutation()
      const [decrementCart, { isSuccess: cartDecrementSuccess }] = useDecrementCartMutation()
      const [removeCart, { isSuccess: cartRemoveSuccess }] = useRemoveCartMutation()
      const handleDelete = (item) => {
            removeCart(item._id)
      }
      const decrementProduct = (item) => {
            decrementCart(item?.productId)
      }
      const incrementProduct = (item) => {
            incrementCart(item?.productId)
      }
      useEffect(() => {
            if (cartDecrementSuccess) {
                  toast.success('Cart Item Decreased')
            }
      }, [cartDecrementSuccess])
      useEffect(() => {
            if (cartIncrementSuccess) {
                  toast.success('Cart Item Increased')
            }
      }, [cartIncrementSuccess])
      useEffect(() => {
            if (cartRemoveSuccess) {
                  toast.success('Cart Item Removed')
            }
      }, [cartRemoveSuccess])


      return (
            <>
                  <div className="cartCard">
                        <div className="flex items-center col-span-6 space-x-6">

                              <img className="lws-cartImage" src={item?.image} alt="product" />
                              <div className="space-y-2">
                                    <h4 className="lws-cartName">{item?.name}</h4>
                                    <p className="lws-cartCategory">{item.category}</p>
                                    <p>BDT <span className="lws-cartPrice">{item.price}</span></p>
                              </div>
                        </div>
                        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">

                              <div className="flex items-center space-x-4">
                                    <div>
                                          <button onClick={() => incrementProduct(item)} className="text-lg text-center">+</button>
                                          <p className="text-base text-center">{item?.orderQuantity}</p>
                                          <button onClick={() => decrementProduct(item)} className="text-2xl text-center">-</button>
                                    </div>
                              </div>

                              <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{item?.price * item?.orderQuantity}</span></p>
                        </div>

                        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                              <button onClick={() => handleDelete(item)} className="lws-removeFromCart">
                                    <i className="text-lg text-red-400 fa-solid fa-trash"><FaTrashAlt></FaTrashAlt></i>
                              </button>
                        </div>

                  </div>
            </>
      );
};

export default CartItems;