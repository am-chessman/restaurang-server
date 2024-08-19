import Nav from "../components/partials/nav"
import Footer from "../components/partials/footer"
// import webAssets from "../components/components";
import "../styles/globalStyles.css"
import "../styles/components.css";
import "../styles/menu.css"
import Card from "../components/menuCard";


export default function Menu() {
    
    const array = []
    for (let i = 0; i < 8; i++) {
        array.push(i)
    }

    const array2 = []
    for (let i = 0; i < 6; i++) {
        array2.push(i)
    }

    return(        
        <>
            <Nav />
            <section id="page__title" >
                <div className="container">
                <h2 className="page__title__text">
                    Utforska Vår Meny
                </h2>
                </div>
            </section>

            <section id="ourSpecials">
                <div className="container">
                    <h3 className="ourSpecials__title">Våra Specialiteter</h3>
                    <div className="ourSpecials__wrapper">
                        <Card />
                    </div>
                </div>
            </section>
        
            <section id="dishGrid">
                <div className="container">
                    <h2 className="dishGrid__title">
                        Topp Rätter
                    </h2>
                    <div className="dishGrid__wrapper">
                        {array.map((index) => (
                                <Card key={index}/>
                        ))}
                    </div>
                </div>
            </section>

            <section id="dishGrid">
                <div className="container">
                    <h2 className="dishGrid__title">
                        Frukost
                    </h2>
                        <div className="dishGrid__wrapper">
                            {array2.map((index) => (
                                <Card key={index}/>
                            ))}
                        </div>
                    </div>
            </section>

            <section id="dishGrid">
                <div className="container">
                    <h2 className="dishGrid__title">
                        Lunch
                    </h2>
                    <div className="dishGrid__wrapper">
                        {array2.map((index) => (
                            <Card key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        
            <section id="dishGrid">
                <div className="container">
                    <div className="filter__flex">
                        <h2 className="dishGrid__title">
                        Middag
                        </h2>
                        <div className="filter-container">
                            <label htmlFor="filterSelect">Filtrera efter Pris:</label>
                            <select id="filterSelect">
                                <option value="all">Alla</option>
                                <option value="small">Liten</option>
                                <option value="medium">Medium</option>
                                <option value="large">Stor</option>
                            </select>
                        </div>
                    </div>

                    <div className="dishGrid__wrapper">
                        <div className="dishGrid__item2" data-price="12">
                            <div className="dishGrid__item__img">
                            <img src="/food-1.png" alt="food img" />
                            </div>
                            <div className="dishGrid__item__info">
                            <h3 className="dishGrid__item__title">
                                Köttbullar
                            </h3>
                            <h3 className="dishGrid__item__price">$12</h3>
                            <div className="dishGrid__item__stars">
                                <img src="/3star.png" alt="3 star" />
                            </div>
                            </div>
                        </div>

                        <div className="dishGrid__item2" data-price="12">
                            <div className="dishGrid__item__img">
                                <img src="/food-1.png" alt="food img" />
                            </div>
                            <div className="dishGrid__item__info">
                                <h3 className="dishGrid__item__title">
                                    Smörgåsbord
                                </h3>
                                <h3 className="dishGrid__item__price">$12</h3>
                                <div className="dishGrid__item__stars">
                                    <img src="/3star.png" alt="3 star" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="dishGrid__item2" data-price="14">
                            <div className="dishGrid__item__img">
                                <img src="/food-1.png" alt="food img" />
                            </div>

                            <div className="dishGrid__item__info">
                                <h3 className="dishGrid__item__title">
                                    Räkmacka
                                </h3>
                                <h3 className="dishGrid__item__price">$14</h3>
                                <div className="dishGrid__item__stars">
                                    <img src="/3star.png" alt="3 star" />
                                </div>
                            </div>
                        </div>

                        <div className="dishGrid__item2" data-price="14">
                            <div className="dishGrid__item__img">
                                <img src="/food-1.png" alt="food img" />
                            </div>

                            <div className="dishGrid__item__info">
                                <h3 className="dishGrid__item__title">
                                    Silltallrik
                                </h3>
                                <h3 className="dishGrid__item__price">$14</h3>
                                <div className="dishGrid__item__stars">
                                    <img src="/3star.png" alt="3 star" />
                                </div>
                            </div>
                        </div>

                        <div className="dishGrid__item2" data-price="18">
                            <div className="dishGrid__item__img">
                                <img src="/food-1.png" alt="food img" />
                            </div>
                            <div className="dishGrid__item__info">
                                <h3 className="dishGrid__item__title">
                                    Sjömansbiff
                                </h3>
                                <h3 className="dishGrid__item__price">$18</h3>
                                <div className="dishGrid__item__stars">
                                <img src="/3star.png" alt="3 star" />
                            </div>
                            </div>
                        </div>
                        <div className="dishGrid__item2" data-price="18">
                            <div className="dishGrid__item__img">
                            <img src="/food-1.png" alt="food img" />
                            </div>
                            <div className="dishGrid__item__info">
                            <h3 className="dishGrid__item__title">
                                Pannbiff
                            </h3>
                            <h3 className="dishGrid__item__price">$18</h3>
                            <div className="dishGrid__item__stars">
                                <img src="/3star.png" alt="3 star" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}