import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <>
    <LanguageProvider>
      <CartProvider>
        <Header />

        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cartpage />} />
        </Routes>

        <Footer />
      </CartProvider>
    </LanguageProvider>
    </>
  );
}

export default App;
