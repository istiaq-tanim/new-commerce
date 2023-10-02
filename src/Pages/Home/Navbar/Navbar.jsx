import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"
import useCartCalculation from "../../../utils/useCartCalculation";

const Navbar = () => {
      const { quantity } = useCartCalculation()
      return (
            <nav className="bg-[#171C2A] py-4">
                  <div className="navBar">
                        <Link to="/">
                              <img src={logo} alt="LWS" className="max-w-[140px]" />
                        </Link>
                        <div className="flex gap-4">
                              <Link to="/" className="navHome" id="lws-home"> Home </Link>
                              <Link to="/cart" className="navCart" id="lws-cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    <span id="lws-totalCart">{quantity}</span>
                              </Link>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;