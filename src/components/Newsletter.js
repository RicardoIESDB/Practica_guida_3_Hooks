import React, { useRef, useState } from "react";

export default function Newsletter() {
    const inputRef = useRef(null);
    const [email, setEmail] = useState("");
    const handleSubscribe = () => {
        if (email === '') {
            inputRef.current.focus();
            inputRef.current.style.border = '2px solid red';
        } else {
            alert(`Gracias por suscribirte con el correo: ${email}`);
            inputRef.current.style.border = '1px solid #ced4da';
            setEmail('');
        }
    };

    return (
        <div className="py-5 mt-5" style={{ backgroundColor: '#f5f0e1' }}>
            <div className="container text-center">
                <h3 style={{ color: '#6F4E37' }}>Novedades de Argentina Cafè</h3>
                <p className="text-muted">Suscríbete para recibir promos en desayunos y meriendas.</p>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-6 d-flex gap-2">
                        <input
                            ref={inputRef}
                            type="email"
                            className="form-control"
                            placeholder="Tu correo para ofertas deliciosas..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            className="btn text-white"
                            style={{ backgroundColor: '#6F4E37' }}
                            onClick={handleSubscribe}
                        >
                            Suscribirse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}