import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { catalog } from './data/catalog';

export default function App() {
  const [products, setProducts] = useState(catalog);

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="app d-flex flex-column min-vh-100">
      <Header totalCarrito={carrito.length}/>

      <main className='flex-grow-1'>
        <ProductList 
          products={catalog}
          addToCart={agregarAlCarrito}
        />
      </main>

      <Footer/>
    </div>
  );
}
