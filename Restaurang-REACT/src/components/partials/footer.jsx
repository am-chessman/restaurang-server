export default function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Om oss</h4>
                        <ul>
                            <li><a href="#">Vår historia</a></li>
                            <li><a href="#">Vårt team</a></li>
                            <li><a href="#">Karriär</a></li>
                            <li><a href="#">Ansvarighet</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Hjälp</h4>
                        <ul>
                            <li><a href="#">Vanliga frågor</a></li>
                            <li><a href="#">Kontakta oss</a></li>
                            <li><a href="#">Hitta en restaurang</a></li>
                            <li><a href="#">Kundsupport</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Matupplevelse</h4>
                        <ul>
                            <li><a href="#">Menyer</a></li>
                            <li><a href="#">Bordreservation</a></li>
                            <li><a href="#">Catering</a></li>
                            <li><a href="#">Evenemang</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h4>Följ oss</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}