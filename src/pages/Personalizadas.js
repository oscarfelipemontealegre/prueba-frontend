
import React, { useEffect, useState } from 'react';
import '../css/personalizadas.css';

const Personalizadas = () => {
    const [experiencias, setExperiencias] = useState([]); 
    const PerApi = 'https://api.test.interactiva.net.co/api/get-customer_experiences/'; 

    useEffect(() => {
        const fetchExperiencias = async () => {
            try {
                const response = await fetch(PerApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setExperiencias(data);  
                console.log('Experiencias data:', data);
            } catch (error) {
                console.log('Error al obtener las experiencias:', error);
            }
        };

        fetchExperiencias();
    }, []);

    return (
        <div className="percontainerali">
            <h2 className="text-center experiencias-title-ali-per">EXPERIENCIAS PERSONALIZADAS</h2>
            <div className="row justify-content-center-ali-per">
                {experiencias.map((experiencia) => (
                    <div className="col-6 mb-2 per" key={experiencia.id}>
                        <div className="card shadow h-100 ali per">
                            <div className="card-body-per-container">
                                <div className="image-container-ali-per">
                                    {experiencia.image ? (
                                        <img 
                                            src={`https://api.test.interactiva.net.co${experiencia.image}`} 
                                            className="card-img-top-ali" 
                                            alt={experiencia.title} 
                                        />
                                    ) : (
                                        <div className="no-logo ali">No Image Available</div>
                                    )}
                                </div>
                                <div className="card-text-container">
                                    <div className="card-body-per">
                                        <h5 className="card-title-per">{experiencia.description}</h5>
                                        <p className="card-text-per">{experiencia.diference_description}</p>
                                        <button className="btn btn-primary per">Cotizar Viaje</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personalizadas;
