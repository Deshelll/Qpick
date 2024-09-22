import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { LanguageContext } from '../contexts/LanguageContext';
import translations from '../components/texts';

const Cartpage = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const { language } = useContext(LanguageContext);
    return (
        <div className='cart'>
            <main className="content__cart">
                <section className="places">
                    <h2 className="content-title__goods-cart">{translations[language].сart}</h2>
                    <div className='cart-main'>
                        <ul className='cart-list'>
                            {cart.map((item) => (
                                <li key={item.index} className='cart-item'>
                                  <div className='cart-item-img-block'>
                                    <div className='cart__image'>
                                      <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className='cart-item-quantity'>
                                        <button
                                          className='cart-item-decrease'
                                          onClick={() => decreaseQuantity(item.index)}
                                        >
                                          -
                                        </button>
                                        <span className='cart-item__amount'>{item.quantity}</span>
                                        <button
                                          className='cart-item-increase'
                                          onClick={() => increaseQuantity(item.index)}
                                        >
                                          +
                                        </button>
                                    </div>
                                  </div>
                                  <div className='cart-item-description'>
                                    <h3 className='cart-item-title'>{item.title}</h3>
                                    <p className='cart-item-price'>{item.price.toLocaleString('ru-RU')} ₽</p>
                                  </div>
                                  <div className='cart-item-romove-block'>
                                    <button
                                      className='cart-item__remove'
                                      onClick={() => removeFromCart(item.index)}
                                    >
                                      <img src='/icons/DeleteCard.svg' alt='Удалить товар' />
                                    </button>
                                    <div className='cart-item__total-price'>
                                      {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                                    </div>
                                  </div>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-total">
                            <div className="cart-total-price">
                                <p>{translations[language].total}</p>
                                <p>
                                    ₽ {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString('ru-RU')}
                                </p>
                            </div>
                            <button className="checkout-btn">{translations[language].registrationButton}</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Cartpage;
