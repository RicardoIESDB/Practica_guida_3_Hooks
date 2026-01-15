import React from 'react';
import Card from './Cards';

export default function ProductList({ products, addToCart}) {
  if (!products || products.length === 0) {
    return <p className="text-center text-muted mt-3">No hay productos disponibles.</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-center">Nuestros Productos Destacados</h2>

      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-md-6 col-lg-4 mb-4">

            <Card
              imagen={p.imagen}
              titulo={p.nombre}
              footer={
                <button
                  className='btn btn-dark w-100'
                  disabled={!p.enStock}
                  onClick={() => addToCart(p)}
                >
                  {p.enStock ? 'Añadir al Carrito' : 'Sin Stock'}
                </button>
              }
            >
              <p className='text-primary fw-bold fs-4 mb-1'>
                {p.precio.toFixed(2)} €
              </p>
              <div className='mb-3'>
                <span className={`badge ${p.enStock ? 'bg-success' : 'bg-secondary'}`}>
                  {p.enStock ? 'En Stock' : 'Agotado'}
                </span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}