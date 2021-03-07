import React from 'react';
import { Link } from 'react-router-dom';

const ShowCountryDetails = (props) => {
    const {name,capital,flag,region,population}=props.singleCountry;
    return (
        <div className="countryContainer">
            <img src={flag} alt=""/>
            <h3>Name :{name}</h3>
            <p>Capital :{capital}</p>
            <p>Region : {region}</p>
            <h3> Population :{population }</h3>
            <Link to="/Home"><button> Back To Home</button></Link>
        </div>
    );
};

export default ShowCountryDetails;