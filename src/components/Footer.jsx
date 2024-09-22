import React, { useContext } from "react";
import { Link } from "react-router-dom";
import translations from "./texts";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <div className="logo">QPICK</div>
            <ul className="footer-menu-list">
                <li className="footer-menu-list-item">
                    <Link className="footer-menu-link-active underline__animation" to="#0">{translations[language].favourites}</Link>
                </li>
                <li className="footer-menu-list-item">
                    <Link className="footer-menu-link-active underline__animation" to="/cart">{translations[language].сart}</Link>
                </li>
                <li className="footer-menu-list-item">
                    <Link className="footer-menu-link-active underline__animation" to="#0">{translations[language].contacts}</Link>
                </li>
            </ul>
            <ul className="footer-service-list">
                <li className="footer-menu-list-item">
                    <Link className="footer-menu-link-active underline__animation" to="#0">{translations[language].terms}</Link>
                </li>
                <li className="footer-menu-list-item">
                    <div className="footer-menu-language">
                        <img className="footer-language-image" src="/icons/RU.png" alt="Смена языка" />
                        <button className="footer-menu-button"
                            onClick={() => setLanguage('RU')}
                            style={{ color: language === 'RU' ? '#FFA542' : '#000' }}
                            disabled={language === 'RU'}
                        >
                            Рус
                        </button>
                        <button className="footer-menu-button"
                            onClick={() => setLanguage('EN')}
                            style={{ color: language === 'EN' ? '#FFA542' : '#000' }}
                            disabled={language === 'EN'}
                        >
                            Eng
                        </button>
                    </div>
                </li>
            </ul>
            <ul className="footer-contacts-list">
                <li className="footer-menu-list-item">
                    <a className="footer-menu-link-active" 
                    href="https://vk.com/neoflex_ru?ysclid=m1dutodpnv138007833"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="footer-menu-link-active-image" src="/icons/VK.svg" alt="VK" />
                    </a>
                    <a className="footer-menu-link-active" 
                    href="https://t.me/neoflex_neostudy_bot"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="footer-menu-link-active-image" src="/icons/Telegram.svg" alt="Telegram" />
                    </a>
                    <a className="footer-menu-link-active"
                    href="https://wa.me/77777777777"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="footer-menu-link-active-image" src="/icons/Whatsapp.svg" alt="WhatsApp" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
