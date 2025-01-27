
import React, { useEffect, useState } from 'react';
import '../css/parthers.css';

const Alianzas = () => {
    const [alianza, setAlianza] = useState([]); 
    const AlianzaApi = 'https://api.test.interactiva.net.co/api/get-partners/'; 

    useEffect(() => {
        const fetchAlianza = async () => {
            try {
                const response = await fetch(AlianzaApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAlianza(data); 
                console.log('alianza data:', data);
            } catch (error) {
                console.log('Error al obtener las alianzas:', error);
            }
        };

        fetchAlianza();
    }, []);

    return (
        <div className="containerali">
            <h2 className="text-center experiencias-title-ali">ALIANZAS ESTRATEGICAS</h2>
            <div className="row justify-content-center-ali">
                {alianza.map((alianzaItem) => (
                    <div className="col-md-2 mb-4 ali" key={alianzaItem.id}>
                        <div className="card shadow h-100 ali">
                            <div className="image-container-ali">
                                {alianzaItem.logo ? (
                                    <img 
                                        src={`https://api.test.interactiva.net.co${alianzaItem.logo}`} 
                                        className="card-img-top-ali" 
                                        alt={alianzaItem.name} 
                                    />
                                ) : (
                                    <div className="no-logo ali">No Logo Available</div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alianzas;
