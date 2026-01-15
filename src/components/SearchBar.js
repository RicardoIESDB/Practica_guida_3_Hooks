import React from 'react';

export default function SearchBar({
  query,
  onChange,
  onClear,
  placeholder = 'Buscar productos por nombre, código o descripción…',
}) {
  const handleInput = (e) => onChange(e.target.value);
  const handleClear = () => onClear?.();

  return (
    <div className="mb-4">
      <div className="input-group input-group-lg shadow-sm">
        <span className="input-group-text bg-white border-end-0 text-muted">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>

        <input
          type="text"
          className="form-control border-start-0"
          placeholder={placeholder}
          value={query}
          onChange={handleInput}
        />

        {query && (
          <button 
            className="btn btn-outline-secondary border-start-0" 
            type="button" 
            onClick={handleClear}
          >
            Limpiar ✕
          </button>
        )}
      </div>

      <div className="form-text text-muted mt-2 ps-1">
        Filtra en tiempo real. Ejemplos: “Medialunas”, “Mate”, “alfajor”.
      </div>
    </div>
  );
}