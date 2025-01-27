import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/experiencias.css';


const Experiencias = () => {
    const [experiencias, setExperiencias] = useState([]);
    const ExpApi = 'https://api.test.interactiva.net.co/api/get-travels/';

    useEffect(() => {
        const fetchExperiencias = async () => {
            try {
                const response = await fetch(ExpApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setExperiencias(data);
            } catch (error) {
                console.error('Error al obtener las experiencias:', error);
            }
        };

        fetchExperiencias();
    }, []);

    return (
        <div className="container experiencias-container">
            <h2 className="text-center experiencias-title">EXPERIENCIAS GRUPALES</h2>
            <div className="row justify-content-center">
                {experiencias.map((experiencia) => (
                    <div className="col-md-3 mb-3" key={experiencia.id}>
                        <div className="card experiencia-card shadow">
                            <img 
                                src={`https://api.test.interactiva.net.co${experiencia.image_cover}`} 
                                className="card-img-top" 
                                alt={experiencia.title} 
                                onError={(e) => e.target.src = 'https://via.placeholder.com/300x200'}
                            />
                            <div className="card-body">
                                {experiencia.status && (
                                    <p className="status-bar" style={{ backgroundColor: experiencia.status.color }}>
                                        {experiencia.status.title}
                                    </p>
                                )}
                                <h5 className="card-title experiencia-title">{experiencia.title}</h5>
                                <p className="experiencia-fecha">
                                    {experiencia.date_start} - {experiencia.date_end} | 
                                    <strong> Desde ${experiencia.cost} USD</strong>
                                </p>
                                <p className="experiencia-descripcion">{experiencia.description}</p>
                                <div className="info-div">MÁS INFORMACIÓN</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Experiencias;
