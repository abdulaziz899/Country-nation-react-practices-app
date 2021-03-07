import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';
const Country = (props) => {
    const {name,capital,flag,region,population}=props.country;
    const history=useHistory();
    const showDetails=()=>{
        history.push(`/Country/${name}`)
    }
    return (
        <div className="countryContainer">
            <img src={flag} alt=""/>
            <h3><Link to={`/Country/${name}`}>Name :{name}</Link></h3>
            <p>Capital :{capital}</p>
            <p>Region : {region}</p>
            <h3> Population :{population }</h3>
            <Link to={`/Country/${name}`}><button>country details</button></Link>
            <button onClick={showDetails}>Click Me</button>
        </div>
    );
};

export default Country;