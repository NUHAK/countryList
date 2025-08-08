import React from 'react';

const CountryCard = ({ country }) => {
    return (
        <div className="country-card">
            <div className="image-wrapper">
                <img src={country.img} alt={country.name} className="country-img" />
            </div>
            <div className="country-info">
                <h4>{country.name}</h4>
                <p>{country.continent}</p>
            </div>
        </div>
    );
};

export default CountryCard;
