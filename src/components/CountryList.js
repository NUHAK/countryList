import React, { useState } from 'react';
import CountryCard from './CountryCard';
import { countries } from '../data/countries';

const CountryList = ({ selectedContinent }) => {
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredCountries =
        selectedContinent === 'All'
            ? countries
            : countries.filter(c => c.continent === selectedContinent);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <div className='container'>
            <div className="country-list">
                {filteredCountries.slice(0, visibleCount).map((country, index) => (
                    <CountryCard key={index} country={country} />
                ))}
            </div>

            <div className='btn-container'>
                {visibleCount < filteredCountries.length && (
                    <button className='load_btn' onClick={handleLoadMore}>
                        Load more
                    </button>
                )}
            </div>
        </div>
    );
};

export default CountryList;
