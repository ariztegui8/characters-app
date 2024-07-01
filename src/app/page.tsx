import CharacterList from '@/components/CharacterList'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className='px-4'>
        <CharacterList />
      </div>
    </div>
  )
}

export default Home