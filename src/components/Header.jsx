import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <header className="header">
            <div className="logo">
                <Link className="header-link-active" to="">
                    QPICK
                </Link>
            </div>
            <ul className="header-list">
                <li className="header-list-item">
                    <Link className="header-link-active" to="">
                        <img className="header-link-active-image" src="/icons/Like.svg" alt="Избранные товары" />
                    </Link>
                </li>
                <li className="header-list-item">
                    <Link className="header-link-active" to="/cart">
                        <img className="header-link-active-image" src="/icons/Cart.svg" alt="Корзина" />
                            {totalItems > 0 && (
                                <span className="cart-count-circle">
                                    <span className="cart-count">{totalItems}</span>
                                </span>
                            )}
                    </Link>
                </li>
            </ul>
      </header>
    );
};

export default Header;