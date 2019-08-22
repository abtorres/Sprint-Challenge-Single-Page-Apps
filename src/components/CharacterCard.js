import React from "react";
import './CharacterCard.css';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  text-align: center;
  margin: 20px;
`;

export default function CharacterCard(props) {
  const character = props.character;

  return (
      <Card className='card'>
        <div className='name'>
          <h2>{character.name}</h2>
        </div>
        <div>
          <div className='image'>
            <img src={character.image}/>
          </div>
          <div className='character-info'>
            <p>species: {character.species}</p>
            <p>gender: {character.gender}</p>
            <p>status: {character.status}</p>
          </div>
        </div>
      </Card>
  );
}