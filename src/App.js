import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { catalog } from './data/catalog';

export default function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <Header />
      <main className='flex-grow-1'>
        <ProductList products={catalog} />
      </main>
      <Footer/>
    </div>
  );
}
