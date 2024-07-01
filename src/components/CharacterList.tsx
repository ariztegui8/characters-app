import React from 'react'
import Character from './Character'
import vegeta from '../assets/vegeta.png'
import trunks from '../assets/trunks.jpg'

const CharacterList = () => {

    const characters = [
        {
            id: 1,
            name: 'Vegeta',
            altura: '2.05',
            peso: '100232',
            fuerza: '1000',
            category: 'F6',
            peleas: '100',
            image: vegeta
        },
        {
            id: 2,
            name: 'Trunks',
            altura: '1.95',
            peso: '95',
            fuerza: '870',
            category: 'F6',
            peleas: '100',
            image: trunks
        }
    ]

  return (
    <div>
        <h2>Characters List</h2>

        <div className='flex gap-4'>
           {characters.map((character) => (
                <Character 
                    key={character.id} 
                    character={character} 
                />
           ))}
        </div>
    </div>
  )
}

export default CharacterList