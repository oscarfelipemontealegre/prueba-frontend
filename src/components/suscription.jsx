import '../css/suscribe.css'

function SuscribeteForm() {
        return (
        <div className="suscribe-container">
            <h2 className="suscribe-title">Suscríbete a nuestro Newsletter</h2>
            <form>
            <input type="email" placeholder="Correo electrónico" required />
            <button type="submit">Suscribirme</button>
            </form>
        </div>
        );
    }
    
    export default SuscribeteForm;