import logo from '../assets/logo.png'
import './Navbar.css'
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mi-navbar">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo milechan" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" target='_blank' aria-current="page" href="https://twitch.tv/miiilechan">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target='_blank' href="https://miiilechan.carrd.co/#section03">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target='_blank' href="https://vgen.co/miiilechan">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target='_blank' href="https://miiilechan.carrd.co/#section04">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar