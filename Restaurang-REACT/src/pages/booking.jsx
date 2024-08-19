import Nav from "../components/partials/nav"
import Footer from "../components/partials/footer"
import { useState } from "react"

export default function Booking() {
    const [selected, setSelected] = useState("option1")

    const handleChange = (event) => {
        setSelected(event.target.value)
    } 
    return (
        <>
            <Nav />
            <section id="form">
                <div className="container">
                    <h3 className="form__title">Book Table</h3>
                    <div className="form__wrapper">
                        <form name="booking" method="POST">
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
                                <label htmlFor="tableType">Table Type</label>
                                <select name="Table Type" id="tableType" value={selected} onChange={handleChange} required>
                                    <option value="small">Small(2 persons)</option>
                                    <option value="medium">Small(4 persons)</option>
                                    <option value="large">large(6 persons)</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="guestNumber">Guest Number</label>
                                <input type="number" id="guestNumber" name="Guest Number" min="1" max="10" required />
                            </div>
                            <div className="form__group">
                                <label htmlFor="placement">Placement</label>
                                <select name="Placement" value={selected} onChange={setSelected} id="placement" required>
                                    <option value="outdoor">Outdoor</option>
                                    <option value="indoor">Indoor</option>
                                    <option value="rooftop">rooftop</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" name="Date" required />
                            </div>
                            <div className="form__group">
                                <label htmlFor="time">time</label>
                                <input type="time" id="time" name="Time" required />
                            </div>
                            <div className="form__group form__group__full">
                                <label htmlFor="note">Note</label>
                                <textarea name="Note" id="note" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn primary-btn">Book Table</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
)
}