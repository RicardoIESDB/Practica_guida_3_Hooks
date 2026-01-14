import React from 'react';

export default function ProductList({ products, addToCart }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-muted mt-3">No hay productos disponibles.</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Nuestros Productos Destacados</h2>
      
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-md-6 col-lg-4 mb-4">
            
            <div className="card h-100 shadow-sm border-0">
              
              <div style={{ height: '200px', overflow: 'hidden', padding: '20px' }} className="d-flex align-items-center justify-content-center bg-light">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.nombre}</h5>
                
                <p className="card-text text-primary fw-bold fs-4">
                  {p.precio.toFixed(2)} €
                </p>

                <div className="mb-3">
                    <span className={`badge ${p.enStock ? 'bg-success' : 'bg-secondary'}`}>
                        {p.enStock ? 'En Stock' : 'Agotado'}
                    </span>
                </div>

                <button 
                  className="btn btn-dark mt-auto w-100" 
                  disabled={!p.enStock}
                  onClick={()=> addToCart(p)}
                >
                  {p.enStock ? 'Añadir al Carrito' : 'Sin Stock'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}