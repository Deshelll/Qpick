import React, { useContext } from 'react';
import { headphones, wirelessHeadphones } from '../components/cards.js';
import { createCard } from '../components/card.jsx';
import { CartContext } from '../contexts/CartContext.jsx';
import { LanguageContext } from '../contexts/LanguageContext.jsx';
import translations from '../components/texts.js';

const Homepage = () => {
    const { addToCart } = useContext(CartContext);

    const { language } = useContext(LanguageContext);

  return (
    <div>
      <main className="content">
        <section className="places">
          <div className="content-title__goods">{translations[language].headphonesTitle}</div>
          <ul className="places__list headphones">
            {headphones.map((product, index) => createCard(product, addToCart, index, language))} 
          </ul>

          <div className="content-title__goods">{translations[language].wirelessheadphonesTitle}</div>
          <ul className="places__list wirelessHeadphones">
            {wirelessHeadphones.map((product, index) => createCard(product, addToCart, index, language))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
