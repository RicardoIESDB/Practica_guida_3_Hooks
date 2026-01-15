import React from "react";

export default function Card({ imagen, titulo, children, footer }) {
    return (
        <div className="card h-100 shadow-sm border-0">
            <div style={{ height: "200px", overflow: "hidden", padding: "20" }} className="d-flex align-items-center justify-content-center bg-light">
                <img
                    src={imagen}
                    alt={titulo}
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                >
                </img>
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{titulo}</h5>

                <div className="card-text flex-grow-1">
                    {children}
                </div>

                {footer && (
                    <div className="mt-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}