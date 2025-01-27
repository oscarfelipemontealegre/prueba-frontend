import React, { useEffect, useState } from 'react';
import '../css/footer.css';
import mailIcon from '../assets/icono_mail.png';
import phoneIcon from '../assets/icono_telefono.png';
import locationIcon from '../assets/icono_ubicacion.png';
import socialLogos from '../assets/logos_redes.png';

const UrlApi = 'https://api.test.interactiva.net.co/api/get-companies/';

const Footer = () => {
  const [company, setCompany] = useState(null); // Cambiar a un solo objeto para la compañía

useEffect(() => {
        const fetchCompany = async () => {
        try {
            const response = await fetch(UrlApi);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCompany(data[0]);  // Asumimos que la API devuelve un array y tomamos el primer elemento
        } catch (error) {
            console.log('Error al obtener la compañía:', error);
        }
        };

        fetchCompany();
    }, []);

    return (
        <footer className="footer">
        <div className="footer-column">
            {company && (
            <img
                src={`https://api.test.interactiva.net.co${company.logo}`}
                alt={`${company.name} Logo`}
                className="footer-logo"
            />
            )}
            <div className="footer-redes">
            <img src={socialLogos} alt="Social Media Logos" />
        </div>
        </div>
        <div className="footer-column footer-nav">
            <ul>
            <li><a href="/inicio">Inicio</a></li>
            <li><a href="/quienes-somos">¿Quienes somos?</a></li>
            <li><a href="/viajes-grupales">Viajes grupales</a></li>
            <li><a href="/viajes-a-la-medida">Viajes a la medida</a></li>
            <li><a href="/contactanos">Contáctanos</a></li>
            <li><a href="/alianzas-estrategicas">Alianzas estratégicas</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/terminos-condiciones">Términos y condiciones</a></li>
            <li><a href="/politica-privacidad">Política de privacidad</a></li>
            <li><a href="/registro-nacional-turismo">Registro Nacional de Turismo</a></li>
            </ul>
        </div>
        <div className="footer-column footer-contact">
            <div>
            <img src={mailIcon} alt="Email Icon" />
            <p>Email: <a href="mailto:info@allintravels.com">info@allintravels.com</a></p>
            </div>
            <div>
            <img src={phoneIcon} alt="Phone Icon" />
            <p>Teléfono: 0057 (604) 444 45 83</p>
            </div>
            <div>
            <img src={locationIcon} alt="Location Icon" />
            <p>Ubicación: Carrera 43A # 18 Sur - 135 Of 834, Sao Paulo Plaza Medellín - Colombia</p>
            </div>
        </div>
        </footer>
    );
    };

export default Footer;
