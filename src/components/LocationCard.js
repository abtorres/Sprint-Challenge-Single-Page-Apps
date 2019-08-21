import React from "react";
import './LocationCard.css'

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div className='location-card'>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>{residents.length}</p>
    </div>
  )
}
