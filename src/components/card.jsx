import translations from "./texts";

export const createCard = (card, addToCart, index, language) => {
  const handleAddToCart = () => {
    const productWithIndex = {
      ...card,
      index,
      quantity: 1,
    };

    addToCart(productWithIndex);
  };

  return (
    <li className="places__item card" key={index}>
      <img className="card__image" src={card.img} alt={`На изображении: ${card.title}`} />
      <div className="card__description">
        <h2 className="card__title">{card.title}</h2>
        <div className="card__price">{card.price.toLocaleString('ru-RU')} ₽</div>
      </div>
      <div className="card__menu">
        <div className="card__rate">
          <img className="card__rate-image" src="/icons/star.svg" alt="Рейтинг" />
          <div className="card__rate-number">{card.rate}</div>
        </div>
        <button className="card__button" onClick={() => handleAddToCart(card)}>{translations[language].buyButton}</button>
      </div>
    </li>
  );
};