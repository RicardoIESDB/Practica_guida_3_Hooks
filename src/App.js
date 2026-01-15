import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Newsletter from './components/Newsletter';
import SearchBar from './components/SearchBar';
import { catalog } from './data/catalog';

export default function App() {
  const [products] = useState(catalog);
  const [carrito, setCarrito] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    console.log("Añadido:", producto.nombre);
  };

  const filteredProducts = products.filter((product)=>{
    const lowerQuery = searchQuery.toLowerCase();
    return (
      product.nombre.toLowerCase().includes(lowerQuery) || product.id.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="app d-flex flex-column min-vh-100">
      <Header totalCarrito={carrito.length} />

      <main className='flex-grow-1 container my-4'>
        <SearchBar 
            query={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
        />
        <ProductList
          products={filteredProducts}
          addToCart={agregarAlCarrito}
        />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
