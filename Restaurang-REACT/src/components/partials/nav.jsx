import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <div className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <a href="./index.html" className="logo">
                    <img src="/logo.png" alt="Star Cuisine" style={{height: "170px", width: "170px", marginTop: "-40px", marginLeft: "-60px"}} />
                    </a>
                    <nav>
                    <div className="nav__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round"}} className="feather feather-menu">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </div>
                    <div className="nav__bgOverlay"></div>
                    <ol className="nav__list">
                        <div className="nav__close">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round"}} className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        </div>
                        <div className="nav__list__wrapper">
            
                        <li><Link to="/" className="nav__link">Hem</Link></li>
                        <li><Link to="/menu" className="nav__link">Meny</Link></li>
                        <li><Link to="/contact" className="nav__link">Kontakt</Link></li>
                        <li><Link to="/booking" className="btn primary-btn">Boka Bord</Link></li>
                        </div>
                    </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}