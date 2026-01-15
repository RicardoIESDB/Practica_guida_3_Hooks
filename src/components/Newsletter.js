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
        <div className="bg-light p-4 mt-5">
            <div className="container text-center">
                <h3>Suscríbete a nuestras novedades</h3>
                <p>Recibe las últimas noticias y ofertas directamente en tu correo.</p>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-6 d-flex gap-2">
                        <input
                            ref={inputRef}
                            type="email"
                            className="form-control"
                            placeholder="Introduce tu correo electrónico..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                        <button
                            className="btn btn-primary"
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