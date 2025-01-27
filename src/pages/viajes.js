import React, { useState } from "react";
import "../css/viajes.css";



const ViajesForm = () => {
    const [destino, setDestino] = useState('');
    const [otroDestino, setOtroDestino] = useState('');
    const [experiencias, setExperiencias] = useState([]);
    const [sabeCuándo, setSabeCuándo] = useState('');
    const [ida, setIda] = useState('');
    const [regreso, setRegreso] = useState('');
    const [ninos, setNinos] = useState(0);
    const [adultos, setAdultos] = useState(1);
    const [viajeIdeal, setViajeIdeal] = useState('');

    const handleButtonChange = (value) => {
        if (experiencias.includes(value)) {
            setExperiencias(experiencias.filter((exp) => exp !== value));
        } else {
            setExperiencias([...experiencias, value]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log({ destino, otroDestino, experiencias, sabeCuándo, ida, regreso, ninos, adultos, viajeIdeal });
    };

    return (
        <div className="travel-form">
            <h1>DISEÑA TU VIAJE</h1>
            <p>AQUÍ COMIENZA TU EXPERIENCIA</p>
            <form onSubmit={handleSubmit}>
                <label>¿Cuál es el destino que quieres visitar?</label>
                <select value={destino} onChange={(e) => setDestino(e.target.value)}>
                    <option value="">Selecciona</option>
                    {/* Agrega más opciones según sea necesario */}
                </select>

                <label>¿Qué otro destino tienes en mente?</label>
                <select value={otroDestino} onChange={(e) => setOtroDestino(e.target.value)}>
                    <option value="">Selecciona</option>
                    {/* Agrega más opciones según sea necesario */}
                </select>

                <label>¿Qué experiencias quieres vivir?</label>
                <div className="experiencias-container">
                    {['Safari', 'Deporte', 'Arte y cultura', 'Playa', 'Descanso', 'Espiritual', 'Naturaleza'].map(exp => (
                        <button
                            type="button"
                            key={exp}
                            className={`experiencia-button ${experiencias.includes(exp) ? 'selected' : ''}`}
                            onClick={() => handleButtonChange(exp)}
                        >
                            {exp}
                        </button>
                    ))}
                </div>
                <div className="cuándo-viajar">
                    <label>¿Sabes cuándo viajar?</label>
                    <input type="radio" name="sabeCuándo" value="sí" onChange={() => setSabeCuándo('sí')} />
                    <label>Sí</label>
                    <input type="radio" name="sabeCuándo" value="no" onChange={() => setSabeCuándo('no')} />
                    <label>No</label>
                    <input type="date" value={ida} onChange={(e) => setIda(e.target.value)} />
                    <input type="date" value={regreso} onChange={(e) => setRegreso(e.target.value)} />
                </div>
                
                <div className="ninos-adultos">
                    <label>Niños:</label>
                    <input type="number" value={ninos} onChange={(e) => setNinos(e.target.value)} min="0" />

                    <label>Adultos:</label>
                    <input type="number" value={adultos} onChange={(e) => setAdultos(e.target.value)} min="1" />
                </div>
                

                <label>Tu viaje ideal...</label>
                <textarea value={viajeIdeal} onChange={(e) => setViajeIdeal(e.target.value)}></textarea>

                <button type="submit">ENVIAR</button>
            </form>
        </div>
    );
};

export default ViajesForm;
