import toast from "react-hot-toast";
import { useAddCartMutation } from "../../../Features/CartItem/CartApi";
import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const ProductCard = ({ product }) => {
      const { _id, name, category, image, quantity, price } = product;
      const [addCart, { isLoading, isSuccess }] = useAddCartMutation();
      const handleCart = () => {
            const data = {
                  name,
                  category,
                  image,
                  quantity,
                  price,
                  productId: _id
            };
            addCart(data);
      };
      useEffect(() => {
            if (isSuccess) {
                  toast.success('Successfully Product added To Cart!');
            }
      }, [isSuccess])



      return (
            <div className="lws-productCard">
                  <img className="lws-productImage" src={image} alt="product" />
                  <div className="p-4 space-y-2">
                        <h4 className="lws-productName">{name}</h4>
                        <p className="lws-productCategory">{category}</p>
                        <div className="flex items-center justify-between pb-2">
                              <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                              <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                        </div>
                        <button disabled={isLoading} onClick={handleCart} className="lws-btnAddToCart">
                              {isLoading ? <BeatLoader size={10} color="#ffff" /> : 'Add To Cart'}
                        </button>
                  </div>
            </div>
      );
};

export default ProductCard;