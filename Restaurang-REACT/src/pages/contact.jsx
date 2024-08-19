import Footer from "../components/partials/footer"
import Nav from "../components/partials/nav"

export default function Contact() {
    return(
        <>
            <Nav />
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
                            Opening Hour
                        </p>
                        </div>
                        <div className="storeInfo__item">
                        <div className="storeInfo__icon">
                            <img src="address-icon.svg" alt="clock icon" />
                        </div>
                        <h3 className="storeInfo__title">
                            GEC, Chittagong
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
                            +880123443
                        </h3>
                        <p className="storeInfo__text">
                            Call Now
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        
            <section id="form">
                <div className="container">
                    <h3 className="form__title">
                        Contact & Inquiry
                    </h3>
                    <div className="form__wrapper">
                        <form name="contact" method="POST" >
                        <div className="form__group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="First Name" required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="Last Name" required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="Email" required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="Subject" required />
                        </div>
                        <div className="form__group form__group__full">
                            <label htmlFor="message">Message</label>
                            <textarea name="Message" id="message" cols="30" rows="10" required></textarea>
                        </div>
                        <button type="submit" className="btn primary-btn">Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}