import Footer from "../components/partials/footer";
import Nav from "../components/partials/nav";
import "../styles/home.css"
import "../styles/globalStyles.css"
import "../styles/components.css"
import "../styles/menu.css"
import Special from "../components/specialitiesCard";
import specialities from "../components/specialitiesData";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Nav/>

            <section id="hero">
                <div className="container">
                    <div className="hero__wrapper">
                        <div className="hero__left">
                            <div className="hero__left__wrapper">
                                <h1 className="hero__heading">Smakupplevelser från hela världen</h1>
                                <p className="hero__info">
                                Vi är en mångkulturell restaurang som erbjuder en smakresa runt jorden med en mix av traditionella och moderna rätter, serverade i en avslappnad och välkomnande atmosfär.
                                </p>
                                <div className="button__wrapper">
                                    <a href="./menu.html" className="btn primary-btn">Utforska Meny</a>
                                    <a href="./booking.html" className="btn">Boka Bord</a>
                                </div>
                            </div>
                        </div>

                        <div className="hero__right">
                            <div className="hero__imgWrapper">
                                <img src="heroImg.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="storeInfo">
                <div className="container">
                    <div className="storeInfo__wrapper">
                        <div className="storeInfo__item">
                            <div className="storeInfo__icon">
                                <img src="wall-clock-icon.svg" alt="clock icon" />
                            </div>
                            <h3 className="storeInfo__title">
                                10 AM - 7 PM
                            </h3>
                            <p className="storeInfo__text">
                                Våra Öppettider
                            </p>
                        </div>
                        <div className="storeInfo__item">
                            <div className="storeInfo__icon">
                                <img src="address-icon.svg" alt="clock icon" />
                            </div>
                            <h3 className="storeInfo__title">
                                Vikingavägen 2
                            </h3>
                            <p className="storeInfo__text">
                                Address
                            </p>
                        </div>
                        <div className="storeInfo__item">
                            <div className="storeInfo__icon">
                                <img src="phone-icon.svg" alt="clock icon" />
                            </div>
                            <h3 className="storeInfo__title">
                                +46 70 123 45 67
                            </h3>
                            <p className="storeInfo__text">
                                Call Now
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="ourSpecials">
                <div className="container">
                    <div className="ourSpecials__wrapper">
                        {specialities.map((item) => (
                            <Special 
                            key={item.id} 
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            />
                        ))}
                        <div className="ourSpecials__right">
                            <h2 className="ourSpecials__title">
                                Våra Specialiteter
                            </h2>
                            <p className="ourSpecials__text">
                                All vår mat förbereds dagligen på våra restauranger för att säkerställa att de högsta kvalitets-, fräschaste måltiderna levereras till våra kunder
                            </p>
                            <Link to="/booking" className="btn primary-btn" >Boka Bord</Link>
                        </div>
                    </div>
                </div>
            </section>
                        
            <h1 className="slider-heading">Våra Hjältar</h1>

            <div className="wrapper">
                <i id="left" className="fa-solid fa-angle-left"></i>
                <ul className="carousel">
                    <li className="card">
                        <div className="img">
                            <img src="chef.jpg" alt="img" draggable="false" />
                        </div>
                        <h2>Blanche Pearson</h2>
                        <span>Huvud Kock</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="chef3.jpg" alt="img" draggable="false" />
                        </div>
                        <h2>Joenas Brauers</h2>
                        <span>Köksbiträde</span>
                    </li>
                        <li className="card">
                        <div className="img">
                            <img src="chef4.jpg" alt="img" draggable="false" />
                        </div>
                        <h2>Lariach French</h2>
                        <span>Servitör</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="chef5.jpg" alt="img" draggable="false" />
                        </div>
                        <h2>James Khosravi</h2>
                        <span>Kock</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="chef6.jpg" alt="img" draggable="false" />
                        </div>
                        <h2>Kristina Zasiadko</h2>
                        <span>Patissier</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="chef7.jpg" alt="img" draggable="false" />
                        </div>
                        <h2>Donald Horton</h2>
                        <span>Kökschef</span>
                    </li>
                </ul>
                <i id="right" className="fa-solid fa-angle-right"></i>
            </div>

            <section id="dishGrid">
                    <div className="container">
                        <h2 className="dishGrid__title">
                            Topp Rätter
                        </h2>
                        <div className="dishGrid__wrapper">
                            <div className="dishGrid__item">
                                <div className="dishGrid__item__img">
                                    <img src="food-1.png" alt="mat bild" />
                                </div>
                                <div className="dishGrid__item__info">
                                    <h3 className="dishGrid__item__title">
                                    Vegansk Sallad Skål
                                    </h3>
                                    <h3 className="dishGrid__item__price">$12</h3>
                                    <div className="dishGrid__item__stars">
                                        <img src="3star.png" alt="3 stjärnor" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="dishGrid__item">
                                <div className="dishGrid__item__img">
                                    <img src="food-2.png" alt="mat bild" />
                                </div>
                                <div className="dishGrid__item__info">
                                    <h3 className="dishGrid__item__title">
                                    Vegansk Pesto Zoodles
                                    </h3>
                                    <h3 className="dishGrid__item__price">$12</h3>
                                    <div className="dishGrid__item__stars">
                                        <img src="3star.png" alt="3 stjärnor" />
                                    </div>
                                </div>
                            </div>

                            <div className="dishGrid__item">
                                <div className="dishGrid__item__img">
                                    <img src="food-7.png" alt="mat bild" />
                                </div>
                                
                                <div className="dishGrid__item__info">
                                    <h3 className="dishGrid__item__title">
                                    Het Grön Skål
                                    </h3>
                                    <h3 className="dishGrid__item__price">$12</h3>
                                    <div className="dishGrid__item__stars">
                                        <img src="3star.png" alt="3 stjärnor" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="discount">
                <div className="container">
                    <div className="discount__wrapper">
                        <div className="discount__images">
                            <div className="discount__img1">
                                <img src="food-5.png" alt="Mat bild" />
                            </div>
                            <div className="discount__img2">
                                <img src="food-4.png" alt="Mat bild" />
                            </div>
                            <div className="discount__img3">
                                <img src="food-3.png" alt="Mat bild" />
                            </div>
                        </div>
                        <div className="discount__info">
                            <h3 className="discount__text">20% RABATT</h3>
                            <h3 className="discount__title">Demo Rätt För Rabatt</h3>
                            <h3 className="discount__price">
                                <span className="discount__oldPrice">$45</span>
                                <span className="discount__newPrice">$35</span>
                            </h3>
                            <div className="discount__stars">
                                <img src="3star.png" alt="3 stjärnor" />
                            </div>
                            <a className="btn primary-btn" href="./booking.html">Boka Bord</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="whyUs">
                <div className="container">
                    <div className="whyUs__wrapper">
                        <div className="whyUs__left">
                            <h2 className="whyUs__title">
                                Varför Välja Vår Mat
                            </h2>
                            <p className="whyUs__text">
                                Kvalitet på Service, Mat, Atmosfär och Värde för Pengarna är de primära elementen för att välja en restaurang. Star Cuisine är en av de mest utsökta fina matrestaurangerna i Chittagong-städer med en fängslande utsikt över GEC Hills, perfekt atmosfär och läckra rätter.
                            </p>
                        </div>
                        <div className="whyUs__right">
                            <div className="whyUs__items__wrapper">
                                <div className="whyUs__item">
                                    <div className="whyUs__item__icon">
                                        <img src="whyUs-icon1.svg" alt="kvalitetsmat" />
                                    </div>
                                    <p className="whyUs__item__text">Kvalitetsmat</p>
                                </div>
                                <div className="whyUs__item">
                                    <div className="whyUs__item__icon">
                                        <img src="whyUs-icon2.svg" alt="Klassisk smak" />
                                    </div>
                                    <p className="whyUs__item__text">Klassisk smak</p>
                                </div>
                                <div className="whyUs__item">
                                    <div className="whyUs__item__icon">
                                        <img src="whyUs-icon3.svg" alt="Skicklig kock" />
                                    </div>
                                    <p className="whyUs__item__text">Skicklig kock</p>
                                </div>
                                <div className="whyUs__item">
                                    <div className="whyUs__item__icon">
                                        <img src="whyUs-icon4.svg" alt="Bästa service" />
                                    </div>
                                    <p className="whyUs__item__text">Bästa service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonial">
                <div className="container">
                    <div className="testimonial__wrapper">
                        <h2 className="testimonial__title">Vad Våra Kunder Säger</h2>
                        <div className="testimonial__items__wrapper">
                        <div className="testimonial__item">
                            <div className="testimonial__item__img">
                                <img src="reviewer2.avif" alt="Sayed Ahmed" />
                            </div>
                            <div className="testimonial__item__info">
                                <h3 className="testimonial__item__name">Xan Cho</h3>
                                <div className="testimonial__item__stars">
                                    <img src="3star.png" alt="3 stjärnor" />
                                </div>
                                <p className="testimonial__item__text">
                                    “Besökte Star Cuisine med vänner förra söndagen. Verkligen härlig måltid och mycket varmt välkomnande - vi skulle rekommendera den här härliga restaurangen och försöka gå tillbaka igen”
                                </p>
                            </div>
                        </div>
                        
                        <div className="testimonial__item">
                            <div className="testimonial__item__img">
                                <img src="reviewer1.avif" alt="Sayed Ahmed" />
                            </div>
                            <div className="testimonial__item__info">
                                <h3 className="testimonial__item__name">Elsa Andersson</h3>
                                <div className="testimonial__item__stars">
                                    <img src="3star.png" alt="3 stjärnor" />
                                </div>
                                <p className="testimonial__item__text">
                                    “Jag vill bara säga tack för den utmärkta service vi fick på din restaurang igår kväll. Även om platsen var mycket upptagen hade vi fortfarande en utmärkt tid och uppskattade verkligen den levande underhållningen också!“
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="newsletter">
                <div className="container">
                    <div className="newsletter__wrapper">
                        <div className="newsletter__info">
                            <h3 className="newsletter__title">Gå Med i Nyhetsbrevet</h3>
                            <p className="newsletter__text">
                                Få aviseringar om de senaste nyheterna och senaste erbjudandena från Star Cuisine
                            </p>
                        </div>
                        <div className="newsletter__form">
                            <form action="">
                                <input type="email" placeholder="Din E-postadress" id="email-entry"/>
                                <button type="submit">Gå med</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}