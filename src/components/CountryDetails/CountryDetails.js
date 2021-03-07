import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowCountryDetails from '../ShowCountryDetails/ShowCountryDetails';
import './CountryDetails.css';
const CountryDetails = () => {
    const {CountryName}=useParams();
    const [countryDetail,setCountryDetail]=useState([]);
    useEffect(() => {
    const url=`https://restcountries.eu/rest/v2/name/${CountryName}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setCountryDetail(data))
    }, [])
    
    return (
        <div>
            <h1>CountryName :{CountryName}</h1>
            {
                countryDetail.map(singleCountry=><ShowCountryDetails singleCountry={singleCountry}></ShowCountryDetails>)
            }
        </div>
    );
};

export default CountryDetails;