import PropTypes from "prop-types"

export default function Special({name, price, image, description, rating}) {
    return(
        <>
            <div className="ourSpecials__left">
                <div className="ourSpecials__item">
                    <div className="ourSpecials__item__img">
                        <img src={image} alt="mat bild" />
                    </div>
                    <h2 className="ourSpecials__item__title">
                        {name}
                    </h2>
                    <h3 className="ourSpecials__item__price">
                        ${price}
                    </h3>
                    <div className="ourSpecials__item__stars">
                        <img src={rating}  alt="3 stjärnor" />
                    </div>
                    <p className="ourSpecials__item__text">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )

}

Special.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
}