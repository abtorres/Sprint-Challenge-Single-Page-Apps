import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
import './LocationList.css';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                setLocations(res.data.results)
            })
            .catch(error => console.log(error))
    },[]);

    return (
        <section className='locations'>
            {locations.map(location => <LocationCard name={location.name} type={location.type} dimension={location.dimension} residents={location.residents} key={location.id} />)}
        </section>
    )
}
